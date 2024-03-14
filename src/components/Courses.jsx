/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Course from './Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('/public/data/courses.json')
        .then (res => res.json())
        .then (data => setCourses(data))
      }, []);
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1'>
           {
            courses?.map (course => <Course course={course}></Course>)
           }
        </div>
    );
};

export default Courses;