function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:

   str1 = str1.replace(/\s/g, '').toLowerCase();
   str2 = str2.replace(/\s/g, '').toLowerCase();
 
   if (str1.length !== str2.length) {
     return false;
   }
 
   const sortedStr1 = str1.split('').sort().join('');
   const sortedStr2 = str2.split('').sort().join('');
 
   return sortedStr1 === sortedStr2;

}

module.exports = esAnagrama;
