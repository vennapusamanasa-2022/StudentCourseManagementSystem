// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import StudentList from './pages/StudentList';
import Navbar from './components/Navbar';
import AddStudents from './pages/AddStudents';
import EditStudent from './pages/EditStudent';
import CourseList from './pages/CourseList';
import AddCourse from './pages/Addcourse';
import EditCourse from './pages/EditCourse';
import EnrollmentList from './pages/EnrollmentList';
import AddEnrollment from './pages/AddEnrollment';
import EditEnrollment from './pages/EditEnrollment';


function App() {
 return(
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element = {<Dashboard />} />

        <Route path ="/students" element ={<StudentList />} />

        <Route  path="/add-student" element = {<AddStudents />}  />

        <Route  path="/edit-student/:id" element={<EditStudent/>}/>

        <Route  path ="/courses" element ={<CourseList />}/>

        <Route path ="/add-course" element = {<AddCourse />}/>

        <Route path ="/edit-course/:id" element = {<EditCourse />}/>

        <Route path ="/enrollments" element={<EnrollmentList />}/>

        <Route path ="/add-enrollment" element ={<AddEnrollment />}/>

        <Route  path ="/edit-enrollment/:id" element ={<EditEnrollment />}/>

      </Routes>
    </BrowserRouter>

 );

}

export default App;
