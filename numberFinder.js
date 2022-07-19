const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var hak = 3
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
var bg = getRandomInt(10)
function run() {
    rl.question('Sayı giriniz ? ', function (girdi) {
        var user = Number(girdi)
        if (girdi > 10) {
            console.log(
                "10dan büyük değer giremezsiniz"
            )
            run()
            return
        }
        if (bg == user) {
            console.log("Bildiniz")
            rl.close()
        }
        else {
            console.log("Bilemediniz")
            console.log("Kalan hak", --hak)
            if (hak == 0) {
                console.log("hakkınız kalmadı")
                console.log("Cevap",bg)
                rl.close
            }
            else {
                run()
            }
        }
    });
}
run()
