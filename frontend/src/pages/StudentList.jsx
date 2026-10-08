import { useEffect, useState , } from "react";
import { Link } from 'react-router-dom';
import api from "../services/api";


function StudentList(){

    const [students ,setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();

    }, []);
    const fetchStudents  = async () => {
        try{
            const response = await api.get("/students/");

            setStudents(response.data);

        } catch (error) {
            console.error("Error fetching students:", error);
        }

    };
    
    const handleDelete = async (id) =>{

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if(!confirmDelete){
            return;
        }
        try{
            await api.delete(`/students/${id}/`);

            alert("Student deleted Successfully!");

            fetchStudents();

        }catch(error){

            console.error("Error deleting Student:",error);

            alert("Failed to delete student.");
        }

    };
    return(


        <div>
            <h1>Students</h1>

            {students.length === 0 ? (
                <p>No students found.</p>
            ):(
                <table border ="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {students.map((student) =>(
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.phone}</td>
                                <td>{student.age}</td>
                                <td>
                                    <Link to={`/edit-student/${student.id}`}>
                                    <button>Edit</button>
                                    </Link>

                                    {" | "}

                                    <button onClick={() => handleDelete(student.id)}>Delete</button>
                                </td>
                            </tr>

                        ))}
                    </tbody>

                </table>
            )}
        </div>
    );
}
export default  StudentList;