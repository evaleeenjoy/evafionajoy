let LIGHT = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        led.setBrightness(LIGHT)
    } else {
        led.setBrightness(255)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Heart)
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
        basic.clearScreen()
    } else {
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("Start!")
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . # . . .
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . # . .
                . # . . .
                # . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . # .
                . . # . .
                . # . . .
                # . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . #
                . . . # .
                . . # . .
                . # . . .
                # . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                . . # . .
                . # . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . #
                . . . # .
                . . # . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . #
                . . . # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . #
                `)
            basic.pause(100)
            basic.clearScreen()
        }
    }
})
