"user strict"

function parImpar(num) {
  if (num % 2 == 0) {
    return "true";
  } else {
    return "false"
  }
}


const valor = 9;
const stringValue = parImpar(valor);

console.log(stringValue);