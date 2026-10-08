import { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function CourseList(){

    const [courses ,setCourses] = useState([]);

    useEffect(() =>{
        fetchCourses();
        
    },[]);

    const fetchCourses = async () => {

        try{

            const response = await api.get("/courses/");

            setCourses(response.data);

        }catch (error){

            console.error("Error fetching courses:",error);
        }
    };
    const handleDelete = async (id) =>{

        const confirmDelete =window.confirm(
            "Are you sure you wnat to delete this course?"
        );

        if(!confirmDelete){
            return;
        }

        try{

            await api.delete(`/courses/${id}/`);

            alert("course deleted successfully!");

            fetchCourses();

        }catch(error){

            console.error("Error deleting:", error);

            alert("Failed to delete course.");
        }
    };

   
    return(
        <div>

            <h1>Courses</h1>

            <Link to ="/add-course">
            <button>Add Course</button>
            </Link>

            <br/>
            <br/>

            {courses.length === 0? (
                <p>No courses found.</p>

             ) : (
                <table border ="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Duration</th>
                            <th>Fee</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {courses.map((course)=>(

                            <tr key ={course.id}>

                                <td>{course.id}</td>
                                <td>{course.name}</td>
                                <td>{course.duration}</td>
                                <td>{course.fee}</td>
                                <td>
                                    <Link to ={`/edit-course/${course.id}`}>
                                    <button>Edit</button>
                                    </Link>

                                    {" | "}

                                    <button onClick={() => handleDelete(course.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            )}
        </div>


    );

}
export default CourseList;
