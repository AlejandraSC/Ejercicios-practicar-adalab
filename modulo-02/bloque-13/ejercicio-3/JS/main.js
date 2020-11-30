'use strict';

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

const premiumEx = users.map((user) => (user = user.isPremium ? 'Bienvenida  ' + user.name + '. Gracias por confiar en nosotros.' : 'Bienvenida ' + user.name));

console.log(premiumEx);

//Operador condicional (ternario): https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator
