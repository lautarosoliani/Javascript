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
