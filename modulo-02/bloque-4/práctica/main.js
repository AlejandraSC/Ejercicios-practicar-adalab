let coffeName = "café con leche";
let myOrder = makeMeCoffee(coffeName);


console.log(myOrder)





let lasana = "lasana";
let myOrder2 = makeMeCoffee(lasana)
console.log(myOrder2);

console.log(makeMeCoffee("jamon"))
console.log(makeMeCoffee("chorizo"))
console.log(makeMeCoffee("elchuza"))


function newCall(text) {
  console.log("Aquí tiene su " + text + ", que lo disfrute")
}



function makeMeCoffee(coffeeName) {
  return `Aquí tiene su ${coffeeName}, que lo disfrute`;
}


const a = function (ladoLargo, ladoCorto) {
  if (ladoCorto != ladoLargo) {
    return "Es un rectangulo"

  } else {
    return "Es un cuadrado"
  }
}

let ladoLargo = 10;
let ladoCorto = 10;
let textoMostrar = rectangleOrCuadrado(ladoLargo, ladoCorto);
console.log(textoMostrar);

newCall("a");
newCall("ab");