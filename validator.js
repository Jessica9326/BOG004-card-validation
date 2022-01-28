const validator = {
  isValid(numeroTarjeta) {
       //Se convierte el numero de tarjeta en Array e invierte su orden
      const invertido=Array.from(numeroTarjeta).reverse()   
       //Se crea un Array vacio para almacenar los numeros procesados
      const procesado=[] 
      //se crea el ciclo para recorrer el array 
      for (let i = 0; i<invertido.length; i++) { 
       //El algoritmo de Luhn cuenta desde uno, se crea una constante para que a la posicion i + 1 
        const posicion=i+1
        //Se valida que la posicion sea par comparando el residuo con 0
        if(posicion%2 == 0) {
          //Se toma el numero que esta en la posicion i y la multiplica * 2
          let n = invertido[i] * 2 
          //Valida que el resultado sea igual o mayor a 10
          if(n>=10) {
            //Toma el resultado y separa sus digitos para sumarlos
            const digitos= Array.from(n.toString())
             n=parseInt(digitos[0]) + parseInt(digitos[1])
          } 
          //Se envia al array  procesado      
          procesado.push(n)
        }   
        //Si no cumple las condiciones anteriores va directo al array procesado  
        else {
          procesado.push(parseInt(invertido[i]))
        }
      }
      //Suma todos los numeros procesados recorriendo el array uno a uno
      let sum= 0;
      for( let i=0; i<procesado.length; i++) {
       //Se utiliza el operador += para que acumule los valores 
        sum += procesado[i];
      }
      //Retorna si la tarjeta es valida o no, dependiendo si su residuo entre 10 es =0
    return sum%10 == 0;
  },
   
  //Metodo para enmascarar la tarjeta
   maskify(numerosTarjeta) {
     //Se toma un numero de tarjeta y se convierte en un array
     const digitosTarjeta=Array.from(numerosTarjeta)
     //Se crear el ciclo para que recorra los numeros ignorando las 4 ultimas posiciones
    for (let i = 0; i<(numerosTarjeta.length-4); i++){
      //Reemplaza los primeros numeros por # dejando intacto los ultimos 4
      digitosTarjeta [i]="#"
    } 
    //Se retorna Array convertido en string//
   return digitosTarjeta.toString().replace(/,/g,"");

   } 
};

export default validator;
