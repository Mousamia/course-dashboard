/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Course from './Course';

const Courses = ({ priceCalc }) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const setCourses = async () => {
            const response = await fetch('/public/data/courses.json')
            const json = await response.json()
            console.log(response.ok)
            if (response.ok) {
                setCourses(json)
            }
        }

        setCourses()
    }, [])
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1'>
            {
                courses.map(course => <Course course={course} priceCalc={priceCalc}></Course>)
            }
        </div>
    );
};

export default Courses;