 const inicio = () =>
    let miNumero;
    do {
        miNumero = parseInt(prompt("Hola, ingresa un número entre 1 y 20"));
        if(isNaN(miNumero) || miNumero < 1 || miNumero > 20){
            alert("Tú N° ingresado está fuera del rango (1 al 20); vuelve a ingresar");
        }
        while (isNaN(miNumero) || miNumero < 1 || miNumero > 20);
        let auxiliar = '';
        for (let index = 1; index <= miNumero; index++) {
            console.log('${index} x ${numero} = ${numero * index}');
            let acumulacion = 1;
            for (let i = 1; i <= index; i++){
                acumulacion *= i;
            }
            aux += 'El resultado Factorial de ${index} es: ${acumulador}\n'
        }

        console.log(auxiliar);

    }