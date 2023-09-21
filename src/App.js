import "./App.css";
import React, { useState } from "react";
import "./index.css";

// function App() {
//     const cars = ["tesla", "Audi","BMW","Mercedes"];
// // create a list of car....
// const LIstItems =cars.map(car=>{
//   return <li key={car}>{car}</li>
// })
// return(
//   <ol className="items">
// {LIstItems}
// </ol>
// )
// }
// function ListComponent (){
//   return(<ol>
//     <li>tesla </li>
//   </ol>)
// }
// const handleClick = (event) => {
//   console.log("hello you click me ");
// };

// // teachers try
// function App() {
//   // state
//   const [counter, setCounter] = useState(0);

//   const handleIncrement = (event) => {
//     event.preventDefault();
//     setCounter((prev) => prev + 1);
//     console.log(counter);
//   };

//   const handleDecrement = (event) => {
//     event.preventDefault();
//     setCounter((prev) => prev - 1);
//     console.log("Decrementing...");
//   };
//   // render
//   return (
//     <section className="counter-container">
//       <div className="people">{counter}</div>
//       <button className="actionbtn" onClick={handleIncrement}>
//         increment
//       </button>
//       <button className="actionbtn" onClick={handleDecrement}>
//         decrement
//       </button>
//     </section>
//   );
// }

// my own try
// function App  () {
//   const[counter, setCounter]=useState(0);
//  const handleIncrement=(event)=>{
// event.preventDefault();
// setCounter((prev)=> prev+1)
//  }

//  const handleDecrement=(event)=>{
// event.preventDefault();
// setCounter((prev)=> prev-1)
//  }

// return(<section>
//   <button onClick={handleIncrement} >increment</button>
//   <button onClick={handleDecrement}>decrement</button>
//   <div>{counter}</div>
// </section>
// )
// }
// function App() {

//   // onchange handler

//  const handleChange =(event)=>{
// event.preventDefault()
// console.log("value :",event.target.value)
//  }
//   return (

//    <section className="form-container">
//      <form onSubmit={(event)=>{
//       event.prevent();
//       console.log("form submitted");
//      }} className="form">
//       <input onChange={handleChange} type="text" placeholder="Enter your name "></input>
//       <input type="text" placeholder="Enter your Email "></input>
//       <input type="text" placeholder="Enter your Phone "></input>
//       <button type="submit">submit</button>
//     </form>
//    </section>
//   );
// }

function App() {
  // onchange handler

  return (
    <section className="form-container">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const elements = event.target.elements;
          const { name, email, tel } = elements;
          alert(
            `your name is ${name.value} and your email is ${email.value} amd your phone number is ${tel.value}`
          );
        }}
        className="form"
      >
        <input type="text" placeholder="Enter your name " name="name" />
        <input type="text" placeholder="Enter your Email " name="email" />
        <input type="text" placeholder="Enter your Phone " name="tel" />
        <button type="submit">submit</button>
      </form>
    </section>
  );
}

export default App;
