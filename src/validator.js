const validator = {
  isValid(numeroTarjeta) {
    let resultado=false;
  
    
      const invertido=numeroTarjeta.reverse();
      const procesado=[]
      console.log(invertido);
      for (let i = 0; i<numeroTarjeta.length; i++) { 
        console.log(numeroTarjeta[i])
        const posicion=i+1
        if(posicion%2==0) {
          //console.log("par")
          let n = numeroTarjeta[i]*2
          if(n>=10) {
            const digitos= Array.from(n.toString())
             n=parseInt(digitos[0]) + parseInt(digitos[1])
          } 
          procesado.push(n)
        }
        else {
          //console.log("impar")
          procesado.push(parseInt(numeroTarjeta[i]))
        }
      }
      let sum= 0;
      for( let i=0; i<procesado.length; i++) {
        sum += procesado[i];
      }
      console.log(sum%10==0)
      console.log(sum)

      console.log(procesado)
    return sum%10==0;
  }
};
export default validator;
