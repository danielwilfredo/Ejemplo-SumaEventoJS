/*
ID a utilizar
resultado
numero1
numero2
botonSumar

*/
//cremos la funcion con la cual vamos a ejecutar la suma
function suma() {
  //creamos variables para guardar los valores de numero 1 y 2
  let numero_1, numero_2, suma;
  //obtenemos el elemento del input junto con su valor
  //convertimos el valor de entrada a un numero ya sea con parseInt o parseFloat
  numero_1 = parseFloat(document.getElementById("numero1").value);
  numero_2 = parseFloat(document.getElementById("numero2").value);
  suma = numero_1 + numero_2;
  //obtenemos el elemento en donde vamos a escribir el resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `El resultado de la suma es: ${suma.toFixed(2)}`;
}

//obtenemos el elemento del boton por medio de su id
const boton = document.getElementById("botonSumar");
//le añadimos un evento de click, para que al dar click se ejecute la funcion suma
// boton.addEventListener("click", suma);

//Utilizando el arrow function


const sumar = () =>{
      //creamos variables para guardar los valores de numero 1 y 2
  let numero_1, numero_2, suma;
  //obtenemos el elemento del input junto con su valor
  //convertimos el valor de entrada a un numero ya sea con parseInt o parseFloat
  numero_1 = parseFloat(document.getElementById("numero1")?.value);
  numero_2 = parseFloat(document.getElementById("numero2")?.value);
  

  suma = numero_1 + numero_2;

  //obtenemos el elemento en donde vamos a escribir el resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `El resultado de la suma es: ${suma.toFixed(2)}`;
}


boton.addEventListener("click", sumar);
