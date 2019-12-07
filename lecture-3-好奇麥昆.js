function 全家音樂 () {
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(784, music.beat(BeatFraction.Double))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
}
function 閃右方向燈 (n次: number) {
    for (let index = 0; index < n次; index++) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        music.playTone(262, music.beat(BeatFraction.Eighth))
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        basic.pause(100)
    }
}
function 右轉 (速度: number) {
    閃右方向燈(4)
    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 速度)
    maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 速度)
}
function 閃左方向燈 (n次: number) {
    for (let index = 0; index < n次; index++) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        music.playTone(262, music.beat(BeatFraction.Eighth))
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        basic.pause(100)
    }
}
function 左轉 (速度: number) {
    閃左方向燈(4)
    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 速度)
    maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 速度)
}
全家音樂()
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
let Red = 0
let Green = 0
let Blue = 0
basic.forever(function () {
    if (maqueen.sensor(PingUnit.Centimeters) > 12) {
        maqueen.MotorRun(maqueen.aMotors.All, maqueen.Dir.CW, 30)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.showIcon(IconNames.Happy)
    } else if (maqueen.sensor(PingUnit.Centimeters) <= 8) {
        maqueen.motorStop(maqueen.aMotors.All)
        if (Math.randomBoolean()) {
            左轉(80)
        } else {
            右轉(80)
        }
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showIcon(IconNames.Sad)
    } else {
        maqueen.motorStop(maqueen.aMotors.All)
        basic.showIcon(IconNames.Confused)
    }
})

