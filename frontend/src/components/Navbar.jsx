import { Link } from "react-router-dom";

function Navbar (){
    return(
        <nav>

            <h2>Student Course Management System</h2>

            <Link to ="/">Dashboard</Link>
            {" | "}

            <Link to ="/students">Students</Link>
            {" | "}

            <Link to ="/add-student">AddStudents</Link>

            {" | "}

            <Link to ="/courses">CourseList</Link>

           {" | "}
            
            <Link to ="/enrollments">EnrollmentList</Link>

        </nav>
    );

}
export default Navbar;