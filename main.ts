let Temperatura = 0
basic.forever(function () {
    Temperatura = input.temperature()
    if (Temperatura < 26) {
        soundExpression.slide.play()
        basic.showIcon(IconNames.Sad)
        basic.showString("T. Baja")
    } else if (Temperatura > 34) {
        soundExpression.soaring.play()
        basic.showIcon(IconNames.Sad)
        basic.showString("T. Alta")
    } else {
        soundExpression.happy.play()
        basic.showIcon(IconNames.Heart)
        basic.showString("T. Normal")
    }
})
