/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Course from './Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/public/data/courses.json');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setCourses(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData(); // Call the async function
      }, []);
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1'>
           {
            courses.map (course => <Course course={course}></Course>)
           }
        </div>
    );
};

export default Courses;