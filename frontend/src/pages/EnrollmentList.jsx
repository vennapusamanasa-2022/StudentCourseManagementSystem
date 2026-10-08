import {useEffect ,useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";


function EnrollmentList(){

    const[enrollments, setEnrollments] =useState([]);

    useEffect(() => {
        fetchEnrollments();
    } ,[]);

    const fetchEnrollments =async () =>{

        try{
            const response = await api.get("/enrollments/");

            setEnrollments(response.data);

        }catch (error) {

            console.error("Error fetching enrollments:",error);
        }
    };

    const handleDelete  = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this enrollment?"
        );

        if(!confirmDelete){
            return;
        }

        try {
            await api.delete(`/enrollments/${id}/`);

            alert("Enrollment deleted Successfully!");

            fetchEnrollments();

        }catch (error) {
            console.error("Error deleting enrollment:", error);

            alert("Failed to delete enrollment.");
        }

    };

    return (

        <div>
            <h1>Enrollment List</h1>

            <Link to ="/add-enrollment">
                <button>Add Enrollment</button>
            </Link>

            <br/>
            <br/>

            {enrollments.length === 0 ?(

                <p>No enrollments found.</p>
            ):(

                <table border ="1">

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Student</th>
                            <th>Course</th>
                            <th>Enrollment Date</th>
                            <th>Active</th>
                        </tr>
                    </thead>

                    <tbody>

                        {enrollments.map((enrollment) =>(

                            <tr key ={enrollment.id}>
                                <td>{enrollment.id}</td>
                                <td>{enrollment.student}</td>
                                <td>{enrollment.course}</td>
                                <td>{enrollment.enrollment_date}</td>
                                <td>

                                    <Link to ={`/edit-enrollment/${enrollment.id}`}>
                                    <button>Edit</button>
                                    
                                    </Link>

                                    { '| '}

                                    <button onClick ={() => handleDelete(enrollment.id)

                                    }> Delete </button>
                                </td>

                                
                            </tr>

                            

                        ))}

                    </tbody>

                </table>
            )}
            
        </div>

    );


}
export default EnrollmentList;
