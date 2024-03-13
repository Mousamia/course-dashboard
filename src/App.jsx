
import './App.css'
import Courses from './components/Courses'

function App() {

  return (
    <>

      <div className="container grid grid-cols-4 ">
        <div className='col-span-3  bg-sky-700'>
          <Courses></Courses>
        </div>
        <div>Course Quantity</div>
      </div>

    </>
  )
}

export default App
