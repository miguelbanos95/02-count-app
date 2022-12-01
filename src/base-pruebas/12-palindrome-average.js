
export const palindrome = (string) => {
   // encontramos un cornercase y lo tenemos que controlar con esta condición 
   if( typeof string === 'undefined') return undefined

   return string.split('').reverse().join('')
}


palindrome('nepe')

export const average = array => {

   if(array.length === 0) return 0; //Corner case: if an array is empty 
   // if( typeof array === 'undefined') return undefined; 

   let sum = 0;
   
   array.forEach(num => {
      sum += num
   });

   return sum / array.length
}