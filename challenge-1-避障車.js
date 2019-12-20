/**
 * @link: https://makecode.microbit.org/_T7JLuFC7HY8M
 */
basic.forever(function () {
    if (maqueen.sensor(PingUnit.Centimeters) < 10) {
        if (Math.randomBoolean()) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 50)
            basic.pause(1000)
            maqueen.MotorRun(maqueen.aMotors.All, maqueen.Dir.CW, 20)
            basic.pause(1000)
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 50)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
            basic.pause(1000)
            maqueen.MotorRun(maqueen.aMotors.All, maqueen.Dir.CW, 50)
            basic.pause(1000)
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 50)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
            basic.pause(1000)
            maqueen.MotorRun(maqueen.aMotors.All, maqueen.Dir.CW, 20)
            basic.pause(1000)
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 50)
            basic.pause(1000)
        } else {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 50)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
            basic.pause(1000)
            maqueen.MotorRun(maqueen.aMotors.All, maqueen.Dir.CW, 20)
            basic.pause(1000)
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 50)
            basic.pause(1000)
            maqueen.MotorRun(maqueen.aMotors.All, maqueen.Dir.CW, 50)
            basic.pause(1000)
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 50)
            basic.pause(1000)
            maqueen.MotorRun(maqueen.aMotors.All, maqueen.Dir.CW, 20)
            basic.pause(1000)
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 50)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
            basic.pause(1000)
        }
    } else {
        maqueen.MotorRun(maqueen.aMotors.All, maqueen.Dir.CW, 50)
    }
})

