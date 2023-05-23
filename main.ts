let strip: neopixel.Strip = null
input.onGesture(Gesture.EightG, function () {
    maqueen.motorStop(maqueen.Motors.All)
})
input.onButtonPressed(Button.B, function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    music.playMelody("C5 - C5 - C5 - - C5 ", 120)
    strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.All)
})
input.onGesture(Gesture.Shake, function () {
    maqueen.motorStop(maqueen.Motors.All)
})
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 97)
    basic.pause(500)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
        basic.pause(2000)
    }
})
