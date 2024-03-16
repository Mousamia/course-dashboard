/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './App.css'
import CourseQuantity from './components/CourseQuantity'
import Courses from './components/Courses'

function App() {
  const [marked, setMarked] = useState([]);

  const priceCalc = (markedCourse) =>{
    console.log(markedCourse);
    const newMarked = [...marked, markedCourse];
    setMarked(newMarked);
}

  return (
    <>
        {/* Available Courses */}
      <div className="container grid md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-1 ">
        <div className='col-span-3'>
          <h2 className="text-center text-3xl">Available Courses</h2>
          <Courses priceCalc={priceCalc}></Courses>
        </div>

      {/* Course Quantity */}

        <div>
          <CourseQuantity marked={marked}>
            
          </CourseQuantity>
        </div>
      </div>

    </>
  )
}

export default App
