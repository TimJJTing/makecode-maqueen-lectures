/**
 * @link: https://makecode.microbit.org/_4KPWM48CXV9H
 */
radio.onReceivedString(function (receivedString) {
    if (receivedString == 馬達全部停止) {
        maqueen.motorStop(maqueen.aMotors.All)
    }
    if (receivedString == 馬達全部前進) {
        maqueen.MotorRun(maqueen.aMotors.All, maqueen.Dir.CW, 20)
    }
    if (receivedString == 馬達全部後退) {
        maqueen.MotorRun(maqueen.aMotors.All, maqueen.Dir.CCW, 20)
    }
    if (receivedString == 車子左轉) {
        maqueen.motorStop(maqueen.aMotors.All)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 20)
    }
    if (receivedString == 車子右轉) {
        maqueen.motorStop(maqueen.aMotors.All)
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 20)
    }
    if (receivedString == 打招呼) {
        maqueen.motorStop(maqueen.aMotors.All)
        for (let index = 0; index < 2; index++) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            music.playTone(262, music.beat(BeatFraction.Half))
            basic.pause(200)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        }
    }
})
let 打招呼 = ""
let 車子右轉 = ""
let 車子左轉 = ""
let 馬達全部後退 = ""
let 馬達全部前進 = ""
let 馬達全部停止 = ""
馬達全部停止 = "0"
radio.setGroup(1)
馬達全部前進 = "1"
馬達全部後退 = "2"
車子左轉 = "3"
車子右轉 = "4"
打招呼 = "5"
basic.forever(function () {
	
})

