/*
Escribe una función llamada rotarArray que rote los elementos de un array hacia la derecha
 
o izquierda. La función debe tomar un array arr y un número entero pasos que indique
cuántos pasos se deben realizar hacia la derecha (si es positivo) o hacia la izquierda (si es
negativo)
*/

function rotarArray(arr, pasos)
{
    let y = arr.length;
    let arr2 = new Array(y);

    for (x = 0; x<y; x++) // for x in range(arr.leght )
    {
        let test = (x + pasos) % y;
        if (test < 0)
        {
            test = test + y;
        }
        arr2[test] = arr[x];
    }
    return arr2;
}

console.log(rotarArray([1, 2, 3, 4, 5, 8], -1))
