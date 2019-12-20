/**
 * @link: https://makecode.microbit.org/_8U4YsDVo6LfT 
 */
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
music.beginMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.OnceInBackground)
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.MotorRun(maqueen.aMotors.All, maqueen.Dir.CW, 60)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 60)
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 10)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 60)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 10)
    } else {
        maqueen.motorStop(maqueen.aMotors.All)
    }
})
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(1000)
})

