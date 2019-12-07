basic.forever(function () {
    maqueen.MotorRun(maqueen.aMotors.All, maqueen.Dir.CW, 20)
    basic.pause(500)
    maqueen.motorStop(maqueen.aMotors.All)
    maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 20)
    for (let index = 0; index < 4; index++) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        basic.pause(100)
    }
    basic.pause(500)
    maqueen.motorStop(maqueen.aMotors.All)
    maqueen.MotorRun(maqueen.aMotors.All, maqueen.Dir.CW, 20)
    basic.pause(500)
    maqueen.MotorRun(maqueen.aMotors.All, maqueen.Dir.CW, 20)
    basic.pause(500)
    maqueen.motorStop(maqueen.aMotors.All)
    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 20)
    for (let index = 0; index < 4; index++) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        basic.pause(100)
    }
    basic.pause(500)
    maqueen.motorStop(maqueen.aMotors.All)
    maqueen.MotorRun(maqueen.aMotors.All, maqueen.Dir.CW, 20)
    basic.pause(500)
})

