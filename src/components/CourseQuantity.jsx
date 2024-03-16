/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import CourseDetails from './CourseDetails';

const CourseQuantity = ({marked, totalPrice, totalCredit}) => {


    console.log(marked);
    console.log("tottlll",totalPrice);
    console.log("tottlll",totalCredit);

    return (
        <div>
            <h2 className="text-center mt-2 text-3xl"> Courses Enrolled </h2>
            <h3 className="text-xl mt-2 text-yellow-300">Credits Left: { 20- totalCredit} </h3>
            <h3 className="text-xl mt-2 text-slate-300">Total Price:{totalPrice} </h3>
          {
            marked.map(mark => <CourseDetails key={mark.course_id} mark={mark}></CourseDetails>)
          }
        </div>
    );
};

export default CourseQuantity;


CourseQuantity.propTypes = {
    marked: PropTypes.array.isRequired, // or any other appropriate type
  };