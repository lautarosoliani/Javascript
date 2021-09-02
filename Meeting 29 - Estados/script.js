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
// 📝 2. Desarrolla una aplicación que te permita mostrar una lista de personas asistentes a un evento. Crea el componente <Asistente /> el cual deberá tomar una prop representando el nombre, por ejemplo:

// `<Asistente nombre=”Juan” />`

// Este componente debe mostrar por pantalla el nombre del asistente junto a un checkbox, cuyo estado debe estar controlado por React. Implementa varios asistentes. Mira [este gif](https://gph.is/g/4DebBLP) para tener una idea del resultado final.

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
