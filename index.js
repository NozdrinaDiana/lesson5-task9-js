function getPrimes(num) {
    for (let i = 2; i <= num; i += 1) {
        for (let k = 2; k <= i; k += 1) {
            if (i % k === 0 && k < i) {
                break;
            } else if (k === i){
              console.log(i);
            }   
        }
    }
}
getPrimes(200);
