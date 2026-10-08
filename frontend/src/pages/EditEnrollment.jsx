import { useEffect ,useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import api from "../services/api";


function EditEnrollment(){

    const {id} =useParams();

    const navigate = useNavigate();

    const[students,setStudents] = useState([]);
    const[courses,setCourses] = useState([]);

    const[enrollment,setEnrollment] = useState({
        student:"",
        course:"",
        enrollment_date:""
    });


    useEffect(()=>{
        fetchEnrollment();
        fetchStudents();
        fetchCourses();
    },[id]);


    const fetchEnrollment =async () =>{

        try{

          const response = await api.get(`/enrollments/${id}/`);

            setEnrollment(response.data);

        }catch (error) {

            console.error("Error fetching Enrollment:", error);
        }
    };

    const fetchStudents = async () =>{

        try{

            const response = await api.get("/students/");

            setStudents(response.data);

        } catch (error){


            console.error("Error fetching students:",error);
        }
    };

    const fetchCourses = async () => {

        try{

            const response = await api.get("/courses/");

            setCourses(response.data);

        } catch (error){

            console.error("Error fetaching courses:", error);
        }
    };

    const handleChange = (event) => {

        const { name ,value} = event.target;

        setEnrollment({
            ...enrollment,
            [name]:value
        });
    };

    const handleSubmit =async (event) =>{

        event.preventDefault();

        try{

            await api.put (`/enrollments/${id}/`,enrollment);

            alert('Enrollment updated successfully!');

            navigate("/enrollments");

        } catch (error){

            console.error("Error updating enrollments:", error);

            alert("Failed to update enrollment.");
        }
    };




    return(
        <div>
            <h1>Edit Enrollment</h1>

            <form onSubmit ={handleSubmit}>

                <div>
                    <label>Student:</label>

                    <select 
                       name ="student"
                       value ={enrollment.student}
                       onChange ={handleChange}
                       >

                        <option value= "">
                            Select student
                        </option>

                        {students.map((student) => (

                            <option
                                key ={student.id}
                                value={student.id}
                                >
                                {student.name}
                                    

                            </option>

                        ))}

                       </select>

                </div>

                <br/>
                <div>
                    <label>Course:</label>

                    <select
                    name ="course"
                    value ={enrollment.course}
                    onChange ={handleChange}

                    >
                        <option value ="">
                            Select Course
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
                    <label>Enrollment date :</label>

                    <input 
                        type ="date"
                        name="enrollment_date"
                        value ={enrollment.enrollment_date}
                        onChange ={handleChange}
                    />

                 </div>
                 <br/>

                 <button type="submit">
                    Update Enrollment
                 </button>
            </form>
        </div>
    );
}
export default EditEnrollment;