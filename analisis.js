const  salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    }else {
        return false;
    }
}

function calcularMediaAritmetica(lista){
    
    //Sumando la lista, con el método reduce, que recibe 2 parámetros
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
          return valorAcumulado + nuevoElemento;  
        }
    );
  
    const promedioLista = sumaLista / lista.length;
  
    return promedioLista;
  }
  
//function esPar(numerito) {
//    if (numerito % 2 === 0)}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad.length - 1];
        const personitaMitad2 = lista[mitad.length];

        const mediana = calcularMediaAritmetica(personitaMitad1, personitaMitad2);
        return mediana;
    }else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}
console.log(
    medianaSalarios(salariosColSorted));