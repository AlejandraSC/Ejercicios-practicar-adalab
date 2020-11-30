/**let ingredient = 'pgjghjg';

switch (ingredient) {
  case 'Pollo':
    console.log('Filete con patatas');
    break;
  case 'Merluza':
    console.log('Merluzita en salsa verde');
    break;
  case 'Espinacas':
    console.log('Espinacas rehogadas');
    break;
  default:
    console.log('Nada en la nevera')
}**/

const ingredient = 'Espinacas'

if (ingredient === 'Pollo') {
  console.log('Filete con patatas');
} else if (ingredient === 'Merluza') {
  console.log('Merluzita en salsa verde');
} else if (ingredient === 'Espinacas') {
  console.log('Espinacas rehogadas');
} else {
  console.log('Nada en la nevera');
}