/**
 * @author: Yeray Romero
 * @description: Cálculo del factorial de un número entero mayor o igual a uno.
 */
function checkNumber(num){
if (typeof num === "number") {
       return true;
   }
   else{
        return false;
   }
 
}
function factorial(num){
    if (checkNumber(num)){
        if (num === 1){
            return 1;
        }else{
            return num * factorial(num-1);
        }
    }else
    {
        return NaN;
    }
}
console.log(factorial("1c2"));
console.log(factorial(10));