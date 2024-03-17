/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './App.css'
import CourseQuantity from './components/CourseQuantity'
import Courses from './components/Courses'

function App() {
  const [marked, setMarked] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);
  const [totalCredit, settotalCredit] = useState(0);

  const checker = (marked, credit, course_id) => {
    console.log(credit, course_id);
    console.log(typeof (course_id));
    marked.map(mark => { console.log(mark)
      if (mark.course_id == course_id) {
        console.log("exists")
      }
    })

  }

  const priceCalc = (markedCourse, price, credits, course_id) => {
    const newMarked = [...marked, markedCourse];
    console.log(price);
    console.log(credits);
    setMarked(newMarked);

    // price change

    const newPrice = totalPrice + parseInt(price.replace('$', ''));
    settotalPrice(newPrice);

    // credit change

    const newCredit = totalCredit + credits;
    settotalCredit(newCredit);
    checker(marked, totalCredit, course_id);

  }


  return (
    <>
      {/* Available Courses */}
      <div className="container grid md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-1 ">
        <div className='col-span-3'>
          <h2 className="text-center text-3xl">Available Courses</h2>
          <Courses priceCalc={priceCalc} ></Courses>
        </div>

        {/* Course Quantity */}

        <div>
          <CourseQuantity marked={marked} totalPrice={totalPrice} totalCredit={totalCredit}>

          </CourseQuantity>
        </div>
      </div>

    </>
  )
}

export default App
