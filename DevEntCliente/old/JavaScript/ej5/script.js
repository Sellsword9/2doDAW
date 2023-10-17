// Detectar palíndromo string 

function palindromo(cadena) {
    if (cadena == cadena.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

console.log(palindromo('madam'));
console.log(palindromo('madma'));
console.log(palindromo('imadami'));