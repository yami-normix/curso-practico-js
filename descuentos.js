//Creando un array de objetos con las propiedades nombre y descuento

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

//Creando la función calcularPrecioConDescuento, que recibe 2 parámetros
function calcularPrecioConDescuento(precio, descuento){
    //En porcentajeDelPrecioConDescuento a 100 que es nuestro 100% le restaremos el descuento, el cuál recibimos en la función
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    //El precio se multiplica por el porcentajeDelPrecioConDescuento y se divide entre 100 para obtener la cantidad correcta, sino nos daría una cantidad elevadísima
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/ 100;
  
    return precioConDescuento;
  
  }

  //Esta función es la que dijimos en el button al hacer click.
  function onClickButtonPriceDiscount() {
           const inputPrice = document.getElementById("InputPrice");
           const priceValue = inputPrice.value;
          //Necesitamos obtener el cupón
           const inputCoupon = document.getElementById("InputCoupon");
           const couponValue = inputCoupon.value;
      
           
        
           
           
            //A esta constante le pasamos una función anónima que recibe de parámetro a coupon y va a retornar coupon.name si es igual a couponValue
            //Es como utilizar a coupon para obtener el nombre de cierto objeto en el array de objetos coupons
           const isCouponValueValid = function (coupon) {
            return coupon.name === couponValue;
        };
        
        //Vamos a almacenar en una variable el método find que buscará que un elemento sea verdadero y retornará su valor
        //Es decir irá a nuestro array de cupones y buscará el nombre de un cupón, si coincide con el valor que hemos ingresado
        const userCoupon = coupons.find(isCouponValueValid);
        
        if (!userCoupon) {
            alert("El cupón " + couponValue + " no es válido");
        } else {
            //El descuento será igual a buscar en los coupons si es válido
            const descuento = userCoupon.discount;
            //Llamamos a nuestra función de cálculo de precio con descuento y le pasamos el priceValue, y el descuento. El cuál es igual
            //a si el usuario tiene un cupón
            const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        
            const resultP = document.getElementById("ResultP");
            resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
        }

    }   







