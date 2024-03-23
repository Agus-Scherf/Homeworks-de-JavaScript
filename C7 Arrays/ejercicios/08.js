function encontrarElemento(num, array){
  
    
        for (var i = 0; i < array.length; i++) {
            if (array[i] === num) {
                return i;
            }
        }
        return -1;
}

module.exports = encontrarElemento;
