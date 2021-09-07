////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
///////////////////////////MEETING 30///////////////////////////////////
////////////////////////////////////////////////////////////////////////
// RENDERIZADO CONDICIONAL

// import React, { useState } from "react"

// // importar estilos
// import "./styles.css"

// // importar imágenes
// import check from "./logos/001-cheque.svg"
// import cancel from "./logos/002-cancelar.svg"

// export default function App() {
//     let [nombre, actualizarNombre] = useState("")

//     const manejarCambioNombre = (evento) => {
//         actualizarNombre(evento.target.value)
//     }

//     return (
//         <div className="container">
//             <div>
//                 <div className="input-container">
//                     <input
//                         className="input-nombre"
//                         value={nombre}
//                         onChange={manejarCambioNombre}
//                         type="text"
//                     />
//                     {nombre.length > 6 ? (
//                         <img height="30px" src={check} alt="" />
//                     ) : (
//                         <img height="30px" src={cancel} alt="" />
//                     )}
//                 </div>
//                 <div className="msj">
//                     El nombre no de estar vacío y debe tener más de 6
//                     caracteres.
//                 </div>
//             </div>
//         </div>
//     )
// }
