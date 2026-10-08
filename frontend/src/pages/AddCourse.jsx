import { useState } from "react";
import api from "../services/api";

function AddCourse(){

    const [course ,setCourse] =useState({
        name:"",
        duration:"",
        fee:""
    });

    const handleChange =(event) =>{
        const {name ,value} =event.target;

        setCourse({
            ...course,
            [name]: value
        });
    };

    const handleSubmit = async (event) =>{
        event.preventDefault();

        try{

            await api.post("/courses/", course);

            alert("Course added sucessfully!");


            setCourse({
                name:"",
                duration:"",
                fee:"",
            });

        }catch (error) {
            console.error("Error adding Course:", error);

            alert("Failed to add course")
        }

        
    };


    return(
        <div>
            <h1>Add Course</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Course Name:</label>

                    <input
                        tyep="text"
                        name="name"
                        value={course.name}
                        onChange={handleChange}
                    />
                </div>
                <br/>

                <div>
                    <label>Duration:</label>

                    <input 
                    type="text"
                    name="duration"
                    value={course.duration}
                    onChange={handleChange}
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

                <button type="submit">Add Course</button>
                
            </form>
        </div>
    )

}
export default AddCourse;