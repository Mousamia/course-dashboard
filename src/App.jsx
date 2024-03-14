/* eslint-disable no-unused-vars */

import './App.css'
import CourseQuantity from './components/CourseQuantity'
import Courses from './components/Courses'

function App() {

  const priceCalc = (creditNumber) =>{
    console.log(creditNumber);
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
          <CourseQuantity></CourseQuantity>
        </div>
      </div>

    </>
  )
}

export default App
