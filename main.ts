input.onButtonPressed(Button.B, function () {
    if (LIGHT < 255) {
        for (let index = 0; index < 17; index++) {
            LIGHT = LIGHT + 15
            basic.pause(100)
        }
    }
    if (LIGHT == 255) {
        for (let index = 0; index < 17; index++) {
            LIGHT = LIGHT - 15
            basic.pause(100)
        }
    }
})
let LIGHT = 0
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.forever(function () {
    led.setBrightness(LIGHT)
})
