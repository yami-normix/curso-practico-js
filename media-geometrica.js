const lista = [1, 3, 9];

let mediaGeometrica = lista.reduce(
    function(a, b) {
        return a * b
    }
);

const calculoMediaGeometrica = mediaGeometrica ** (1/lista.length);
console.log(calculoMediaGeometrica);