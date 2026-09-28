// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import StudentList from './pages/StudentList';



function App() {
 return(
    <BrowserRouter>
      <Routes>

        <Route path="/" element = {<Dashboard />} />

        <Route path ="/students" element ={<StudentList />} />

      </Routes>
    </BrowserRouter>

 );

}

export default App;
