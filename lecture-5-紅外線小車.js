/**
 * @link: https://makecode.microbit.org/_WdYPhcM30Hx0
 */
maqueen.IR_callbackUser(function (message) {
    basic.showString("" + message)
    if (message == 往前) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    }
    if (message == 往後) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
    }
    if (message == 左轉) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    }
    if (message == 右轉) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    }
    if (message == 左方向燈) {
        if (左方向燈的狀態 == 0) {
            maqueen.writeLED(maqueen.LEDswitch.turnOn, maqueen.LED.LEDLeft)
            左方向燈的狀態 = 1
        } else {
            maqueen.writeLED(maqueen.LEDswitch.turnOff, maqueen.LED.LEDLeft)
            左方向燈的狀態 = 0
        }
    }
    if (message == 右方向燈) {
        if (右方向燈的狀態 == 0) {
            maqueen.writeLED(maqueen.LEDswitch.turnOn, maqueen.LED.LEDRight)
            右方向燈的狀態 = 1
        } else {
            maqueen.writeLED(maqueen.LEDswitch.turnOff, maqueen.LED.LEDRight)
            右方向燈的狀態 = 0
        }
    }
    if (message == 暫停) {
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (message == dadadum) {
        music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
    if (message == entertainer) {
        music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    }
    if (message == 前奏) {
        music.beginMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
    }
    if (message == 頌詩) {
        music.beginMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
    }
    if (message == 年) {
        music.beginMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
    }
    if (message == 鈴聲) {
        music.beginMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    }
    if (message == funk) {
        music.beginMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    }
    if (message == blues) {
        music.beginMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
    }
    if (message == birthday) {
        music.beginMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    }
    if (message == 婚禮) {
        music.beginMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
    }
    if (message == 停止全部音樂) {
        music.stopMelody(MelodyStopOptions.All)
    }
    if (message == 底燈開燈) {
        strip.showRainbow(1, 360)
        底燈的狀態 = 1
    }
    if (message == 底燈關燈) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        底燈的狀態 = 0
    }
})
let 底燈關燈 = 0
let 底燈開燈 = 0
let 底燈的狀態 = 0
let strip: neopixel.Strip = null
let 停止全部音樂 = 0
let 婚禮 = 0
let birthday = 0
let blues = 0
let funk = 0
let 鈴聲 = 0
let 年 = 0
let 頌詩 = 0
let 前奏 = 0
let entertainer = 0
let dadadum = 0
let 暫停 = 0
let 右方向燈的狀態 = 0
let 左方向燈的狀態 = 0
let 右方向燈 = 0
let 左方向燈 = 0
let 右轉 = 0
let 左轉 = 0
let 往後 = 0
let 往前 = 0
往前 = 10
往後 = 8
左轉 = 13
右轉 = 14
左方向燈 = 1
右方向燈 = 9
左方向燈的狀態 = 0
右方向燈的狀態 = 0
暫停 = 0
dadadum = 12
entertainer = 16
前奏 = 17
頌詩 = 18
年 = 20
鈴聲 = 21
funk = 22
blues = 24
birthday = 25
婚禮 = 26
停止全部音樂 = 2
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
底燈的狀態 = 0
底燈開燈 = 4
底燈關燈 = 6
basic.forever(function () {
	
})

