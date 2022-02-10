// const lista1 = [
//     100,
//     200,
//     300,
//     500
// ];



function calcularMediaAritmetica (lista) {
//     let sumaLista = 0;
//     for (let i = 0; i < lista.length; i++) {
//     sumaLista = sumaLista + lista[i];
//    }


//Otra forma de calcular media aritmética
//A sumaLista le pasamos lista con el método reduce, que recibirá una función
//Que recibirá como parámetro al valor acumulado que inicia en cero, al nuevo elemento
//Luego retornará la suma del valor acumulado + el nuevo elemento.
    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    });

   const promedioLista = sumaLista / lista.length;

   return promedioLista;

}