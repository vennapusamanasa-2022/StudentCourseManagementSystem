import { useEffect , useState} from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";


function AddEnrollment(){

    const navigate = useNavigate();

    const[students ,setStudents] =useState([]);
    const[courses,setCourses] =useState([]);

    const[enrollment,setEnrollment] =useState({
        student:"",
        course:"",
        enrollment_date:""

    });

    useEffect(() =>{
        fetchStudents();
        fetchCourses();

    }, []);

    const fetchStudents = async () =>{

        try {

            const response = await api.get("/students/");

            setStudents(response.data);

        }catch(error){

            console.error("Error fetching students:",error);

        }
    };

    const fetchCourses =async() =>{

        try{
            const response = await api.get("/courses/");

            setCourses(response.data);

        }catch (error){

            console.error("Error fetsvhing courses:", error);
        }
    };

    const handleChange =(event) =>{

        const{name,value} =event.target;

        setEnrollment({
            ...enrollment,
            [name]: value
        });

    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        try{

            await api.post("/enrollments/",enrollment);

            alert("Enrollment added Successfully!");

            navigate("/enrollments");

        }catch(error){

            console.error("Error adding enrollments:",error);

            alert("Failed to add enrollment.");
        }
    };

    
    return(
        <div>

            <h1>Add Enrollment</h1>

            <form onSubmit ={handleSubmit}>

                <div>
                    <label>Student:</label>

                    <select
                        name ="student"
                        value={enrollment.student}
                        onChange={handleChange}
                     >
                        <option value="">
                            select Student

                        </option>
                        {students.map((student) =>(

                            <option
                                key ={student.id}
                                value={student.id}>
                                    {student.name}
                            </option>

                        ))}
                     </select>
                </div>
                <br/>


                {/* <div>
                    <label>Course:</label>
                    <select 
                         name= "course"
                         value={enrollment.course}
                         onChange={handleChange}

                    >
                        <option value="">
                            Select Student
                        </option>

                        {students.map((student) =>(

                            <option
                                key ={student.id}
                                value={student.id}
                                    >
                                    {student.name}

                            </option>

                        ))}

                    </select>

                </div> */}
                {/* <br/> */}

                <div>
                    <label>Course:</label>

                    <select
                        name="course"
                        value={enrollment.course}
                        onChange={handleChange}

                    >
                        <option value="">
                            select course
                            
                        </option>

                        {courses.map((course) =>(

                            <option
                                key ={course.id}
                                value={course.id}
                            > 
                            {course.name}
                            </option>
                        
                        ))}


                    </select>
                </div>
                <br/>

                <div>

                    <label>Enrollment Date:</label>

                    <input 
                    type ="date"
                    name ="enrollment_date"
                    value ={enrollment.enrollment_date}
                    onChange ={handleChange}
                    />
                </div>
                <br/>

                <button type="Submit">Add Enrollment</button>

            </form>
        </div>
    );
}
export default AddEnrollment ;