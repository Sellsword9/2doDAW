const myVar = 1;
let myVar2 = 2;
var myVar3 = myVar + myVar2; //problema de scope
console.log(myVar3);
// node DevEntCliente/jsClase1.js

/**
 * Test de fallo de const
 */
const testFallo = [1, 2, 3]
testFallo.push("fin"); //funciona
//testFallo = 1; 
testFallo.forEach(element => {
    console.log(element);
});

// Path: DevEntCliente/jsClase2.js
let a = 10;
let b = 20;

let c = `tengo ${b} años y ${a} euros`; console.log(c); `esto es un template literal`
console.log("String: " + typeof c);
console.log("Number: " + typeof 112);
console.log("Bool: " + typeof true);
console.log("Undefined: " + typeof undefined);
console.log("Null: " + typeof null);
console.log("Llaves vacías: " + typeof {});
console.log("Array: " + typeof []);
// ------------------------------
let n1 = 0.1;
let n2 = 0.2;
let n3 = n1 + n2;
console.log(n3);
// ------------------------------
n = 12; // it just works
console.log(`El valor de n es ${n}`);
// ------------------------------
const bol = (1 == "1")
const bol2 = (1 === "1")
console.log(1, "==", "1", "debería ser", bol2, "pero es", bol);
console.log(1, "===", "1", "es", bol2);