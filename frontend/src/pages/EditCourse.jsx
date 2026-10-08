import{ useEffect ,useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";


function EditCourse(){

    const { id }  = useParams();

    const [course ,setCourse ]= useState({
        name:"",
        duration:"",
        fee:""
    });

    useEffect(() =>{
        fetchCourse();

    },[id]);

    const fetchCourse =async () =>{
        try{
            const response = await api.get(`/courses/${id}/`);

            setCourse(response.data);

        }catch (error){
            console.error("Error fetcching course:", error);
        }
    };

    const handleChange =(event) =>{
        const {name , value } =event.target;

        setCourse({
            ...course,
            [name]: value
        });
    };

    const handleSubmit = async (event) =>{
            event.preventDefault();

            try{
                await api.put(`/courses/${id}/`,course);

                alert("course updated successfully!");

            }catch (error){
                
                    console.error("error updating course:", error);

                    alert ("failed to update course.");
                
            }
            
        };
    
    return(
        <div>

            <h1>Edit Course</h1>

            <form onSubmit = {handleSubmit}>

                <div>
                    <label>Course Name:</label>

                    <input
                        type ="text"
                        name="name"
                        value={course.name}
                        onChange={handleChange}
                    />
                </div>
                <br/>

                <div>
                    <label>Duration:</label>

                    <input
                         type ="text"
                         name ="duration"
                         value={course.duration}
                         onChange ={handleChange} 
                        />
                </div>
                <br/>

                <div>
                    <label>Fee:</label>

                    <input 
                         type="number"
                         name="fee"
                         value={course.fee}
                         onChange={handleChange}
                         />
                </div>
                <br/>
                <button type="submit"> update course</button>

            </form>
        </div>
    )
}
export default EditCourse;