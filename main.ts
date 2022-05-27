let Temperatura = 0
basic.forever(function () {
    Temperatura = input.temperature()
    if (Temperatura < 26) {
        basic.showIcon(IconNames.Sad)
        basic.showString("T. Baja")
    } else if (Temperatura > 34) {
        basic.showIcon(IconNames.Sad)
        basic.showString("T. Alta")
    } else {
        basic.showIcon(IconNames.Heart)
        basic.showString("T. Normal")
    }
})
