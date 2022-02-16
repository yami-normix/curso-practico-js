
//La función de la media aritmética
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

//Creando la función para saber si un número es par
function esPar(numerito) {
  if (numerito % 2 === 0){
      return true
  } else {
      return false;
  }

}

//Creando la función calcular mediana
function calcularMediana(lista) {
  //La lista la ordeno de menor a mayor con el método sort
  lista.sort((a, b) => a - b);
  
  //Inicializo la variable mediana
  let mediana = 0;
  //La mitad de mi lista será la longitud de la lista que recibí en la función calcular mediana / 2
  const mitadLista = parseInt(lista.length / 2);

  //Creando la condicional
  //Llamo a la función esPar y le paso mi parámetro que es la lista (su longitud)
  if (esPar(lista.length)){
    //El primer elemento será la mitad de mi lista
      const elemento1 = lista[mitadLista];
      //El segundo elemento será un elemento anterior al de la mitad
      const elemento2 = lista[mitadLista - 1]; 
    
      //Sacando la media aritmética de mis 2 elementos
      const promedioElemento1y2 = calcularMediaAritmetica([
          elemento1,
          elemento2
      ]);
      //Acá la mediana será mi promedio
        mediana = promedioElemento1y2;
    
        //En caso de que la longitud de mi lista sea impar, será la posición central
    } else {
        mediana = lista[mitadLista];
    }
      
  return mediana

}