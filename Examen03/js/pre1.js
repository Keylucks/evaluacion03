/* 1.1 */
function operacion(){
    var n1 = 5;
    var n2 = 5;
    suma = n1 + n2;
    resta = n1 - n2;
    multiplicacion = n1 * n2;
    division = n1 / n2;
    resto = n1 % n2;

    console.log("la suma es: " + suma);
    console.log("la resta es:" +resta);
    console.log("la multiplicacion es: " + multiplicacion);
    console.log("la division es: " + division);
    console.log("el resto es: " + resto);


}
/* 1.2 */
function bienvenido(){

    var nombre = "Fernando"
    console.log("Bienvenido " + nombre);
}
/* 1.3 */
function impuesto(){
    tot = 100;
    subtot = tot / 1.18;
    igv = subtot * 0.18;

    console.log("el total es: " + tot);
    console.log("el subtotal es: " + subtot);
    console.log("el IGV es: " + igv);



}
