/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Course = ({course, priceCalc, creditCalc}) => {
    
    // console.log(course);
    const {course_id, course_name, instructor, image_url, price,credits} = course;

    return (
        <div className='border-2 border-slate-600 p-4 m-2'>
            <img src={image_url} className='lg:w-full h-40 sm:w-auto' alt="" />
            <h2 className='text-xl mt-2 text-blue-400'>{course_name} </h2>
            <h2 className='text-blue-300'>Instructor: <span className='text-sm font-italic'>{instructor}</span>  </h2>
            <button onClick={() =>priceCalc(course,price,credits)} id="btn-credit" className="bg-blue-600 px-4 py-2 mr-2 mt-2">Credit {credits} </button>
            {/* <button id="btn-credit" onClick={()=>priceCalc(course, price)} className="bg-yellow-600 px-4 py-2 lg:ml-2">Price {price} </button> */}

        </div>
    );
};

export default Course;