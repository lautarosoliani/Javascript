////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
///////////////////////////MEETING 29///////////////////////////////////
////////////////////////////////////////////////////////////////////////

// function Checkbox() {
//         function onChangeFunction() {
//           console.log(`Changed Achieved`);
//         }

//         return (
//           <>
//             <input onChange={onChangeFunction} type="checkbox" />
//           </>
//         );
//       }

// DEBAJO LA MISMA PERO CON DISTINTO CLG

// function Checkbox() {
//         function onChangeFunction(event) {
//           console.log(event.target.checked);
//         }

//         return (
//           <>
//             <input onChange={onChangeFunction} type="checkbox" />
//           </>
//         );
//       }

// Es  importante ver que ( `event.target.checked`--> true / false` ) es parte de javascript,
// es parte del DOM, es parte del objeto `event` y de la propiedad `target`.
// Este estado SI se puede alterar directamente, pero NO en React
// En React es mandatory alterarlo con useState (para tener nocion de su estado en todo momento)
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//
//
//
//
//      // CHALLENGE //      //
//
// 📝 2. Desarrolla una aplicación que te permita mostrar una lista de personas asistentes a un evento.
// Crea el componente <Asistente /> el cual deberá tomar una prop representando el nombre, por ejemplo:
// `<Asistente nombre=”Juan” />`
// Este componente debe mostrar por pantalla el nombre del asistente junto a un checkbox,
//  cuyo estado debe estar controlado por React. Implementa varios asistentes.
//  Mira [este gif](https://gph.is/g/4DebBLP) para tener una idea del resultado final.

// import React, { useState } from "react";

// export default function App() {
//   return (
//     <>
//       <Asistente nombre={`Juan`} />
//       <Asistente nombre={`Juan2`} />
//       <Asistente nombre={`Juan3`} />
//       <Asistente nombre={`Juan4`} />
//     </>
//   );
// }

// function Checkbox() {
//   const [estado, actualizarEstado] = useState(false);
//   let manejarEstado = () => {
//     actualizarEstado(!estado);
//     console.log(estado);
//   };

//   return (
//     <>
//       <input onChange={manejarEstado} checked={estado} type="checkbox" />
//     </>
//   );
// }

// const Asistente = ({ nombre }) => {
//   return (
//     <div className="tuvieja">
//       <Checkbox />
//       <label>{nombre}</label>
//     </div>
//   );
// };
//
//
//
//
//
//
// 📝 3. Partiendo del ejemplo de renderizado condicional presentado en la bitácora,
// agrega los cambios necesarios para mostrar/ocultar el corazón al hacer click sobre el mismo.
//  Agrega un estado que se alterne entre true y false, y vincúlalo al renderizado condicional del JSX.

// import React, { useState } from "react"
// import corazonFull from "./img/corazon-full.svg"
// import corazonVacio from "./img/corazon-vacio.svg"

// export default function App() {
//     const [mostrarCorazon, setMostrarCorazon] = useState(true)
//     const handleMostrarCorazon = () => {
//         return setMostrarCorazon(!mostrarCorazon)
//     }

//     return (
//         <div className="App">
//             {mostrarCorazon ? (
//                 <img
//                     onClick={handleMostrarCorazon}
//                     height="30px"
//                     src={corazonFull}
//                     alt="corazon full"
//                 />
//             ) : (
//                 <img
//                     onClick={handleMostrarCorazon}
//                     height="30px"
//                     src={corazonVacio}
//                     alt="corazon vacio"
//                 />
//             )}
//         </div>
//     )
// }

// let objeto1 = { prop1: null, prop2: null, prop3: null }
// let objeto2 = { prop1: null, prop2: null, prop3: null }
// let objeto3 = { prop1: null, prop2: null, prop3: null }
// let objeto4 = { prop1: null, prop2: null, prop3: null }

// export const ArrayDeObjetos = [objeto1, objeto2, objeto3, objeto4]
