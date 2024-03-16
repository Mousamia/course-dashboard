/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';


const CourseDetails = ({ mark }) => {
    const { course_id, course_name, instructor, image_url, price, credits } = mark;
    // console.log(mark);
    // const [totalPrice, settotalPrice] = useState(0);
    // const onlyPrice = parseInt(price.replace('$', ''));
    // const newprice = totalPrice + onlyPrice;

    // settotalPrice(newprice);


    return (
        <>
            <li className='bg-yellow-950 p-4 m-3'>
                <span className="text-white-950 font-bold">{course_name}</span>
            </li>

        </>
    );
};

export default CourseDetails;


CourseDetails.propTypes = {
    mark: PropTypes.object.isRequired, // or any other appropriate type
};