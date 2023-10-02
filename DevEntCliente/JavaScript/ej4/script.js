// Dados dos conjuntos de datos set: Comprobar si son iguales elemento por elemento

const a = new Set([1,2,3,4,5]);
const b = new Set([1,2,3,4,5]);

const v = (s1, s2) => s1.size == s2.size && [...s1].every(el => s2.has(el));

console.log("1: " +v(a,b));

// Dados dos conjuntos, comprobar si uno es subconjunto del otro

const c = new Set([1,2,3,4,5]);
const d = new Set([1,2,3,4,5,6,76,8,9,10]);

const v2 = (s1, s2) => [...s1].every(el => s2.has(el));

console.log("2: " +v2(c,d));

