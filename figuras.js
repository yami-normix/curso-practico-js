//Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}


function areaCuadrado (lado){
    return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrada + "cm^2");
console.groupEnd();

//Código del triángulo
console.group("Triángulos");
//const ladoTriangulo1 = 6;
//onst ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log("Los lados de mi triángulo miden: " + ladoTriangulo1 + "cm, " + 
//ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

//const alturaTriangulo = 5.5;
//console.log("La altura del triángulo es: " + alturaTriangulo + "cm" );

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}
//console.log("El área del triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

//Código del círculo
console.group("Círculos");

//Radio
//const radioCirculo = 4;
//console.log("El radio del círculo es: " + radioCirculo + "cm");

//Diámetro
function diametroCirculo (radio) {
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

//Área
function areaCirculo (radio) {
    return (radio * radio) * PI;
}
//console.log("El área del círculo es: " + areaCirculo + "cm^2");

console.groupEnd();


//Aquí interactuamos con el html
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
function calcularPerimetroTriangulo() {
    const inputTrianguloA = document.getElementById("InputTrianguloA");
    const valueA = parseInt(inputTrianguloA.value);
    const inputTrianguloB = document.getElementById("InputTrianguloB")
    const valueB = parseInt(inputTrianguloB.value);
    const inputTrianguloBase = document.getElementById("InputTrianguloBase");
    const valueBase = parseInt(inputTrianguloBase.value);

    const perimetroDelTriangulo = perimetroTriangulo(valueA, valueB, valueBase);
    alert(perimetroDelTriangulo);
}   
function calcularAreaTriangulo() {

}
function calcularPerimetroCirculo() {
    const inputCirculo = document.getElementById("input-circulo");
    const valueInputCirculo = inputCirculo.value;
    const perimetroDelCirculo = perimetroCirculo(valueInputCirculo);
    alert(perimetroDelCirculo);
}
function calcularAreaCirculo() {
    const inputCirculo = document.getElementById("input-circulo");
    const valueInputCirculo = inputCirculo.value;
    const areaDelCirculo = areaCirculo(valueInputCirculo);
    alert(areaDelCirculo);
}