const inicio = () => {
    let minumero;
    do {
        minumero = parseInt(prompt("ingresa tu número desde 1 a 20, \n el resultado se mostrará por CONSOLA"));
        if (isNaN(minumero) || minumero < 1 || minumero > 20) {
            alert("El N° que ingresaste está fuera de rango (1 - 20); repite el ingreso.");
          
        }
    } while (isNaN(minumero) || minumero < 1 || minumero > 20);
    let aux = '';
    for (let index = 1; index <= minumero; index++) {
        console.log(`${index} x ${minumero} = ${minumero * index}`);
        let acumulador = 1;
        for (let i = 1; i <= index; i++) {
            acumulador *= i;
        }
        aux += `El resultado Factorial de ${index} es: ${acumulador}\n`
    }
    console.log(aux);
}