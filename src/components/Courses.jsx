/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('/public/data/courses.json')
            .then(response => response.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h2>Courses will appear here</h2>
        </div>
    );
};

export default Courses;