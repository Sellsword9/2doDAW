/**
 * Ejercicio6: Escribe una función que tome dos matrices (a y b) como argumentos. 
 * Cree un objeto que tenga propiedades con claves los elementos 
 * del array 'a' y con los valores correspondientes 'b'. 
 * Devuelve el objeto.
 */
function ejercicio6(a, b) {
  let obj = {};
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      obj[a[i]] = b[i];
    }
    return obj;
  }else{
    console.log("Las matrices no tienen la misma longitud");
  }
}
console.table(ejercicio6(["1web", "2webs", "3webs", "EsWeb"], ["Value1", "valuetwo", 1e-6, true]));