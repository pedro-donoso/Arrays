 const inicio = () =>
    let miNumero;
    do {
        miNumero = parseInt(prompt("Hola, ingresa un número entre 1 y 20"));
        if(isNaN(miNumero) || miNumero < 1 || miNumero > 20){
            alert("Tú N° ingresado está fuera del rango (1 al 20); vuelve a ingresar");
        }
        

    }