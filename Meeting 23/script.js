////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
///////////////////////////MEETING 23///////////////////////////////////
////////////////////////////////////////////////////////////////////////

let arrayPersonas = [
    {
        nombre: "Jhony",
        asistente: null,
        seccion: "gold",
        rol: "speaker",
    },
    {
        nombre: "Manuel",
        asistente: true,
        seccion: "vip",
        rol: "viewer",
    },
    {
        nombre: "Fran",
        asistente: true,
        seccion: "vip",
        rol: "viewer",
    },
    {
        nombre: "Cintia",
        asistente: true,
        seccion: "platino",
        rol: "viewer",
    },
    {
        nombre: "Marcos",
        asistente: null,
        seccion: "gold",
        rol: "viewer",
    },
    {
        nombre: "Victoria",
        asistente: true,
        seccion: "platino",
        rol: "speaker",
    },
]

function asistentes(x) {
    for (let i = 0; i < arrayPersonas.length; i++) {
        let listaObtenida = arrayPersonas[i]
        if (listaObtenida.asistente === true) {
            console.log("test")
        }
    }
}

asistentes(x)

/**
 * Esta fución debe calcular el total de asistentes
 * según una lista de personas.
 *
 * Se considera que una persona esta "asistente" si
 * la propiedad respectiva es distinta a null y undefined
 *
 * La función debe retornar el número de asistencias.
 */

/**
 * La implementación debe ser:
 *
 * let totalAsistentes = asistentes(personas);
 * console.log(totalAsistentes); // debe ser 3
 */
