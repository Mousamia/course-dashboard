/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './App.css'
import CourseQuantity from './components/CourseQuantity'
import Courses from './components/Courses'

function App() {
  const [marked, setMarked] = useState([]);
  const [totalPrice, settotalPrice] = useState(222);
  console.log(totalPrice);
console.log(typeof(totalPrice));

  const priceCalc = (markedCourse,  price,credits) =>{
    const onlyPrice = parseInt(price.replace('$', ''));
    // console.log(onlyPrice);
    console.log(typeof(onlyPrice));
    const newPrice = totalPrice + onlyPrice;
    settotalPrice(newPrice);
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
