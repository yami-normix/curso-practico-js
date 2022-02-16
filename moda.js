const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
  ];

  const lista1Count = {};
//Vamos a crear un elemento en el objeto e irá sumando cada uno que se repita
  lista1.map(
      function(elemento) {
          if (lista1Count[elemento]) {
              lista1Count[elemento] += 1;
          }else {
              lista1Count[elemento] = 1;
          }
      }
  );

  //Convirtiendo el objeto a un array
  const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );
  
  const moda = lista1Array[lista1Array.length - 1];  