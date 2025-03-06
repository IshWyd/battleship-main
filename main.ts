radio.onReceivedValue(function (name, value) {
    let results = ""
    let guess = ""
    if (name == guess) {
        if (Boats.indexOf(value) < 0) {
            radio.sendValue(results, 0)
        } else {
            radio.sendValue(results, 1)
            value += -1
            led.unplot(value / 5, value % 5)
        }
    }
    if (results) {
        basic.showNumber(value)
    }
})
let ready = ""
let y = 0
let X = 0
let Boats: number[] = []
Boats = []
for (let index = 0; index <= 5; index++) {
    X = randint(0, 4)
    y = randint(0, 4)
    if (led.pointBrightness(X, y) > 0) {
        index += -1
    } else {
        Boats.push(X * 5 + y)
        led.plot(X, y)
    }
}
radio.sendValue(ready, 0)
basic.forever(function () {
	
})
