/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import CourseDetails from './CourseDetails';

const CourseQuantity = ({marked}) => {

    console.log(marked);
    return (
        <div>
            <h2 className="text-center mt-2 text-3xl"> Courses Enrolled </h2>
            <h3 className="text-xl mt-2 text-slate-300">Credits Left:</h3>
            <h3 className="text-xl mt-2 text-slate-300">Total Credits :</h3>
          {
            marked.map(mark => <CourseDetails mark={mark}></CourseDetails>)
          }
        </div>
    );
};

export default CourseQuantity;


CourseQuantity.propTypes = {
    marked: PropTypes.array.isRequired, // or any other appropriate type
  };