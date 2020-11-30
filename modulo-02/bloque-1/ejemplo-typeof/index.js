const text = '¿De qué tipo soy?'
console.log('Soy de tipo:', typeof (text)) // con paréntesis
console.log('Soy de tipo:', typeof text) // sin paréntesis
let text = '¿De qué tipo soy?'
console.log(text + ' es del tipo ' + typeof (text))
text = 123
console.log('ahora ' + text + ' es del tipo ' + typeof (text))
text = undefined
console.log('y ahora ' + text + ' es del tipo ' + typeof (text))