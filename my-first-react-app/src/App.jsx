import './App.css'
import { useState } from 'react';
import Input from "./components/Input";


// function General() {
//   return (
//     < div className='generalInfo'>
//       <h3>Full Name</h3>
//       <input type='text' placeholder='Tracy Nguyen'></input>
//       <h3>Email Address</h3>
//       <input type="text" placeholder='tracyn@gmail.com' />
//       <h3>Phone</h3>
//       <input type="text" placeholder='123-456-7890' />
//     </ div >
//   )
// }

// function Education() {
//   return (
//     <div className='education'>
//         <h3>School</h3>
//         <input type='text' placeholder='University of California, San Diego'></input>
//         <h3>Degree</h3>
//         <input type="text" placeholder='Business Psychology' />
//         <h3>Start Date</h3>
//         <input type="text" placeholder='09/2019' />
//         <h3>End Date</h3>
//         <input type="text" placeholder='06/2023' />
//     </div>
//   )
// }

// function Experience() {
//   return (
//     <div>
//         <h3>Company Name</h3>
//         <input type='text' placeholder='Circle K'></input>
//         <h3>Position</h3>
//         <input type="text" placeholder='Full Stack Web Developer' />
//         <h3>Start Date</h3>
//         <input type="text" placeholder='09/2019' />
//         <h3>End Date</h3>
//         <input type="text" placeholder='06/2023' />
//         <h3>Description</h3>
//         <input type="text" placeholder='Github Master' />
//     </div>
//   )
// }

function App() {
  const [info, setInfo] = useState('');
  return (
    <div className='main-card'>
      <Input
        info={info}
        setInfo={setInfo}
      />
    </div>
  )
}

export default App
