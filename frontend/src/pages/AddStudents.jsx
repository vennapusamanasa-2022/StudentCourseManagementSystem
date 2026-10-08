import { useState } from "react";
import api from "../services/api";

function AddStudents(){

    const[student, setStudent] = useState({
        name: "",
        email:"",
        phone:"",
        age:"" 
    });

    const handleChange =(event) =>{
        const { name ,value }=event.target;

        setStudent({
            ...student,
            [name]:value
        });
    };

    const handleSubmit =async (event) =>{
        event.preventDefault();

        try{

            await api.post("/students/", student);

            alert("Student Added successfully!");

            setStudent({
                name :"",
                email:"",
                phone:"",
                age:""
            });

        }catch(error){
            console.error("Error adding student:",error);
            alert("Failed to add student.");
        }

    };


    return(
        <div>

            <h1>Add student</h1>

            <form onSubmit ={handleSubmit}>

                <div>
                    <label>Name: </label>
                    <input 
                         type ="text"
                         name="name"
                         valu={student.name}
                         onChange={handleChange}
                    />
                </div>

                <br/>

                <div>
                    <label>Email: </label>
                     <input 
                         type="email"
                         name="email"
                         value={student.email}
                         onChange={handleChange}
                    />

                </div>

                <br/>
                <div>
                    <label>Phone :</label>
                    <input 
                       type="text"
                       name="phone"
                       value={student.phone}
                       onChange={handleChange}
                     />
                </div>
                <br/>
                <div>
                    <label>Age:</label>
                    <input 
                        type="number"
                        name="age"
                        value={student.age}
                        onChange={handleChange}
                      />

                </div>

                <br/>
                 <button type="submit">Add Student</button>
            </form>
        </div>

    );



}
export default AddStudents;