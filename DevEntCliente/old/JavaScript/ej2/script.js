/**
 * @author: Yeray Romero
 * @description: Cálculo de las soluciones de una ecuación de segundo grado.
 */
function checkNumber(num) {
    if (typeof num === "number") {
        return true;
    }
    else {
        return false;
    }
}
function ecuacionSegundoGrado(a, b, c) {
    if (checkNumber(a) && checkNumber(b) && checkNumber(c)) {
        let soluciones = [];
        let necesidad  = (b ** 2) - (4 * a * c);
        if (a + b + c === 0) {
            return "Es identidad";
        }
        if (necesidad > 0) {
            soluciones.push((-b + Math.sqrt(necesidad)) / (2 * a));
            soluciones.push((-b - Math.sqrt(necesidad))) / (2 * a);
        }
        if (soluciones[0] === soluciones[1]) {
            return "La solución es: " + soluciones[0];
        }
        if (necesidad < 0) {
            return "No hay soluciones reales";
        }

        return "Las soluciones son: " + soluciones;
    }
    else{
        return NaN;
    }
}
console.log(ecuacionSegundoGrado(4, -8, 21));
console.log(ecuacionSegundoGrado(4, 8, 2));
console.log(ecuacionSegundoGrado(2, 4, 2));
console.log(ecuacionSegundoGrado(2, 4, 0));
console.log(ecuacionSegundoGrado(0, 0, 0));


