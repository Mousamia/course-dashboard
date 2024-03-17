/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './App.css'
import CourseQuantity from './components/CourseQuantity'
import Courses from './components/Courses'

function App() {
  const [marked, setMarked] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);
  const [totalCredit, settotalCredit] = useState(0);

  const priceCalc = (markedCourse,  price,credits) =>{
    const newMarked = [...marked, markedCourse];
    console.log(price);
    console.log(credits);
    setMarked(newMarked);

    // price change

    const newPrice = totalPrice + parseInt(price.replace('$',''));
    settotalPrice(newPrice);

    // credit change

    const newCredit = totalCredit + credits;
    settotalCredit(newCredit);

    if(totalCredit  <= 20)
    alert("you can have at most 20 credit")

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
