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

// CLASSES EXERCISES 1

// import React, { useState } from "react"

// function Checkbox(props) {
//     let [isChecked, setIsChecked] = useState(false)

//     const handleCheckboxChange = () => {
//         isChecked ? setIsChecked(false) : setIsChecked(true)
//     }

//     return (
//         <>
//             <h1>El titulo es: {props.titulo}</h1>
//             <input
//                 checked={isChecked}
//                 onChange={handleCheckboxChange}
//                 type="checkbox"
//             />
//         </>
//     )
// }

// export default Checkbox

// CLASSES EXERCISES 2
// import React, { useState } from "react";

// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <Bulbs />
//     </div>
//   );
// }

// function Bulbs() {
//   const [isOn, setIsOn] = useState(false);

//   const lightOn = () => {
//     setIsOn(true);
//   };
//   const lightOff = () => {
//     setIsOn(false);
//   };
//   return (
//     <>
//       <div className={isOn ? "bulb-on" : "bulb-off"} />
//       <button onClick={lightOn}>On</button>
//       <button onClick={lightOff}>Off</button>
//     </>
//   );
// }

// CLASSES EXERCISES 3
// import React, { useState } from "react"

// import "./styles.scss"

// const App = () => {
//     return (
//         <div>
//             <Contador />
//         </div>
//     )
// }

// function Contador() {
//     const [count, setCount] = useState(0)

//     const sumar = () => {
//         setCount(count + 1)
//     }
//     const restar = () => {
//         return setCount(count - 1)
//     }

//     const reset = () => {
//         return setCount(0)
//     }

//     return (
//         <main className="Application">
//             <section className="Counters">
//                 <div className="Counter">
//                     <p className="count">{count}</p>
//                     <section className="controls">
//                         <button onClick={sumar}>Incrementar</button>
//                         <button onClick={restar}>Restar</button>
//                         <button onClick={reset}>Reset to Cero</button>
//                     </section>
//                 </div>
//             </section>
//         </main>
//     )
// }

// export default App

// IMPORTANTE EL HANDLE SE USA CUANDO ES UNA SOLA COSA,
// POR EJEMPLO UN SOLO BUTTON O UN SOLO INPUT
// CUANDO SON MAS DE UNA COSA, POR EJEMPLO, SE USA UNA FUNCION PARA CADA BUTTON

//
//
//
//
//

// EXERCISE TOGGLE BUTTON
import React, { useState } from "react"
import "./switch.css"

export default function App() {
    return (
        <div className="flex-centered">
            <Switch />
        </div>
    )
}

function Switch() {
    const [buttonState, setState] = useState(false)

    const handleState = () => {
        setState(!buttonState)
        console.log(buttonState)
    }
    // Las clases que deberas agregar condicionalmente al span son:
    // toggle-btn-on para marcar el switch y
    // toggle-btn-off para desmarcar el switch.
    // Nota: la clase toggle-btn siempre debe estar presente
    return (
        <div>
            <label>
                <input
                    className="toggle-input"
                    type="checkbox"
                    onChange={handleState}
                    checked={buttonState}
                />
                {/* nota: la clase toggle-btn SIEMPRE tiene que estar presente */}
                {/* <span className={"toggle-btn toggle-btn-off"} /> */}
                <span
                    className={
                        buttonState
                            ? "toggle-btn toggle-btn-on"
                            : "toggle-btn toggle-btn-off"
                    }
                />
            </label>
        </div>
    )
}
