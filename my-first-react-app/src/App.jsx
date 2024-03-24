import './App.css'
import Education from './Education.jsx'

function General() {
  return (
    < div className='generalInfo'>
      <h3>Full Name</h3>
      <input type='text' placeholder='Tracy Nguyen'></input>
      <h3>Email Address</h3>
      <input type="text" placeholder='tracyn@gmail.com' />
      <h3>Phone</h3>
      <input type="text" placeholder='123-456-7890' />
    </ div >
  )
}

// function List(props) {
//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
//       })}
//     </ul>
//   )
// }


// function Button(props) {
//   const buttonStyle = {
//     color: props.color,
//     fontSize: props.fontSize + 'px',
//     borderRadius: props.borderRadius + 'px'
//   };

//   return (
//     <button style={buttonStyle}>{props.text}</button>
//   );
// }

// function App() {
//   const animals = ['Lion', "Cow", "Snake", "Lizard"];

//   return (
//     <div>
//       <h1>Animals:</h1>
//       <List animals={animals} />
//       <Button text="Click Me!" color="blue" fontSize={12} borderRadius={10} />
//     </div >
//   )
// }

function App() {
  return (
    <div>
      <General />
      <Education />
    </div>
  )
}

export default App
