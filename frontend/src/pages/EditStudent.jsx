import  { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function EditStudent(){
    const { id } = useParams();

    const [student, setStudent] = useState({
        name:"",
        email: "",
        phone:"",
        age:""
    });

    useEffect(() => {
        fetchStudent();
    }, [id]);

    const fetchStudent =async () =>{

        try {
            const response = await api.get(`/students/${id}/`);

            setStudent(response.data);

        }catch (error) {

            console.error("Error fetching Student:",error);


        }
    };
    const handleChange =(event) =>{

        const {name ,value } =event.target;

        setStudent({
            ...student,
            [name]: value
        });
    };
    
    const handleSubmit =async (event) =>{
        event.preventDefault();

        try {

            await api.put(`/students/${id}/`, student);
            
            alert("Students updated sucessfuly!");
        } catch (error){
            console.error("Error updating Student:",error);

            alert("Failed to update student.")
        }
    };

    return(
        <div>
            <h1>Edit Student</h1>

            <form onSubmit ={handleSubmit}>
                <div>
                    <label> Name:</label>
                    <input  
                        type="text"
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                        />
                </div>
                <br/>

                <div>
                    <label>Email:</label>

                    <input  
                        type="email"
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                        />
                </div>
                <br/>

                <div>
                    <label>phone:</label>

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

                <button type="submit">update Student</button>

            </form>
        </div>

    );


}

export default EditStudent;
