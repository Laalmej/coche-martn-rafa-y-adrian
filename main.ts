music.playMelody("A G E G G E F C5 ", 120)
basic.forever(function () {
    if (input.lightLevel() < 125) {
        basic.showLeds(`
            . . . . .
            # # . # #
            # # . # #
            . . . . .
            . . . . .
            `)
    } else {
        basic.clearScreen()
    }
})
