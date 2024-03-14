/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Course from './Course';

const Courses = ({priceCalc}) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://github.com/Mousamia/course-dashboard/blob/main/public/courses.json')
            .then(response => response.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1'>
           {
            courses.map (course => <Course course={course} priceCalc={priceCalc}></Course>)
           }
        </div>
    );
};

export default Courses;