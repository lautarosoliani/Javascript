////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
///////////////////////////MEETING 30///////////////////////////////////
////////////////////////////////////////////////////////////////////////

// TOOLBOX
// event.target.value

//
//
//

// import React, { useState } from "react";
// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <Input />
//     </div>
//   );
// }

// function Input() {
//   const [inputState, setInputState] = useState(null);

//   const handleInput = (event) => {
//     setInputState(event.target.value);

//     console.log(`el valor del input es:`);
//     console.log(event.target.value);
//   };

//   return (
//     <>
// <input type="text" onChange={handleInput} value={inputState}></input>
//     </>
//   );
// }

//
//
//
//
//

// input type date:
//
//
//
//
// import React, { useState } from "react";
// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <Input />
//     </div>
//   );
// }

// function Input() {
//   const [inputState, setInputState] = useState(``);
//   // const [tiempoUNIX, setTiempoUNIX] = useState(0)

//   const handleInput = (event) => {
//     const tiempoUNIX = new Date(event.target.value).getTime();
//     const dateYear = dateString.getFullYear()

//     console.log(`el valor del input es:`);
//     console.log(event.target.value);
//     console.log(tiempoUNIX);
//     setInputState(event.target.value);
//   };

//   return (
//     <>
//       <input type="date" onChange={handleInput} value={inputState}></input>
//     </>
//   );
// }

// // https://www.youtube.com/watch?v=If1lfe-Fhc8&t=2s

// SELECT TAG

// import React, { useState } from "react";

// export default function App() {
//   return (
//     <div>
//       <Select />
//     </div>
//   );
// }

// function Select() {
//   const [selectState, setState] = useState("Pera");
//   const handleChange = (event) => {
//     setState(event.target.value);
//   };

//   return (
//     <>
//       <select onChange={handleChange} value={selectState}>
//         <option value="Manzana">Manzana</option>
//         <option value="Naranja">Naranja</option>
//         <option value="Pera">Pera</option>
//       </select>
//     </>
//   );
// }

// COMPLETE EXERCICES
// https://codesandbox.io/s/estado-inputs-de-fecha-7em1i?file=/src/App.jsx:0-1758
// import React, { useState } from "react";

// export default function App() {
//   return (
//     <div>
//       <Checkbox />
//       <Input />
//       <Fecha />
//       <Select />
//     </div>
//   );
// }

// function Select() {
//   let [valorActual, actualizarEstado] = useState("naranja");

//   const manejarCambio = (event) => {
//     console.log("el valor del input es:");
//     console.log(event.target.value);
//     actualizarEstado(event.target.value);
//   };

//   return (
//     <div>
//       <select onChange={manejarCambio} value={valorActual}>
//         <option value="manzana">Manzana</option>
//         <option value="naranja">Naranja</option>
//         <option value="uva">Uva</option>
//       </select>
//     </div>
//   );
// }

// function Fecha() {
//   let [valorActual, actualizarEstado] = useState("");

//   const manejarCambio = (event) => {
//     console.log(event.target.value);
//     const tiempoUNIX = new Date(event.target.value);

//     console.log("el valor del input es tiempo UNIX es:");
//     console.log(tiempoUNIX);
//     actualizarEstado(event.target.value);
//   };

//   return (
//     <div>
//       <input value={valorActual} onChange={manejarCambio} type="date" />
//     </div>
//   );
// }

// function Input() {
//   let [valorActual, actualizarEstado] = useState("");

//   const manejarCambio = (event) => {
//     console.log("el valor del input es:");
//     console.log(event.target.value);
//     actualizarEstado(event.target.value);
//   };

//   return (
//     <div>
//       <input value={valorActual} onChange={manejarCambio} type="text" />
//     </div>
//   );
// }

// function Checkbox() {
//   let [valorActual, actualizarEstado] = useState(false);

//   const manejarCambio = () => {
//     actualizarEstado(!valorActual);
//   };

//   return (
//     <div>
//       <input checked={valorActual} onChange={manejarCambio} type="checkbox" />
//     </div>
//   );
// }
