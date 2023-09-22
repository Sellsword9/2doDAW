/**
 * @author: Yeray Romero
 * @description: Cálculo de la letra del dni
 */
function checkNumber(num){
    if (typeof num === "number" && num >= 0 && num <= 99999999) {
        return true;
    }
    else{
        return false;
    }
}
letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
function letraDNI(num){
    if (checkNumber(num)){
        return letras[num%23];
    }else{
        return "Fallo al introducir el número";
    }
}
console.log(letraDNI(12345678));
console.log(letraDNI(99999999));
console.log(letraDNI(1234567));
console.log(letraDNI(123456789));
console.log(letraDNI("a"));
