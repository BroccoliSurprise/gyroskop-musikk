basic.showIcon(IconNames.EigthNote)
basic.forever(function () {
    pins.analogSetPitchVolume(Math.map(input.acceleration(Dimension.Y), 1023, -1023, -10, 100))
})
basic.forever(function () {
    music.playTone(Math.map(input.acceleration(Dimension.X), -1023, 1023, 131, 988), music.beat(BeatFraction.Whole))
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.changeTempoBy(20)
        basic.pause(100)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        music.changeTempoBy(-20)
        basic.pause(100)
    }
})
