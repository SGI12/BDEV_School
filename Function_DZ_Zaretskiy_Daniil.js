
function number_sequence (n) {
    for (let i=1; i<=n; i++) {
        if (n===5) {console.log("Пять")}
        else if (i===13) {console.log("Тринадцать");}
        else if (i===22) {console.log("Двадцать два");}
        else if (i===35) {console.log("Тридцать пять");}
        else if (i===98) {console.log("Девяносто восемь");}
        else {console.log(i)}
    }
}
let m = 100
console.log(number_sequence(m));
console.log('Done!');