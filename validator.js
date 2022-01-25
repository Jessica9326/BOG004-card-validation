const validator = {
  isValid(numeroTarjeta) {   
      const invertido=Array.from(numeroTarjeta).reverse()   
      const procesado=[]  
      for (let i = 0; i<invertido.length; i++) { 
        const posicion=i+1     
        if(posicion%2==0) {
          let n = invertido[i]*2
          if(n>=10) {
            const digitos= Array.from(n.toString())
             n=parseInt(digitos[0]) + parseInt(digitos[1])
          }       
          procesado.push(n)
        }     
        else {
          procesado.push(parseInt(invertido[i]))
        }
      }
      let sum= 0;
      for( let i=0; i<procesado.length; i++) {
        sum += procesado[i];
      }
    return sum%10==0;
  },

   maskify(numerosTarjeta) {
     const digitosTarjeta=Array.from(numerosTarjeta)
    for (let i = 0; i<(numerosTarjeta.length-4); i++){
      digitosTarjeta [i]="#"
    } 
   return digitosTarjeta.toString().replace(/,/g,"");

   } 
};

export default validator;
