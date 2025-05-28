import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExerciseDisplay from "./Components/ExerciseDisplay";
import ShowExercise from "./Pages/ShowExercise";
import  Contact  from './Components/Contact';
import './index.css'

 const App = () => {
  return (
    <div>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ShowExercise />} />
    </Routes>
    </div>
  )
}

export default App