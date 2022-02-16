//Creando mi array de objetos
const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

//Recorriendo el array y retornando la multiplicación de las notas por los créditos
const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

//Sumando las notas con créditos
const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

//Creando un nuevo array unicamelnte con los creditos de cada materia
const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

//Sumando esos créditos
const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

//Haciendo la división de las sumas.
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;

