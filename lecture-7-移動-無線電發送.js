/**
 * @link: https://makecode.microbit.org/_F0zhYTgR5hDi
 */
input.onButtonPressed(Button.A, function () {
    radio.sendString(馬達全部停止)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString(馬達全部後退)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString(馬達全部前進)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString(車子左轉)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString(車子右轉)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString(打招呼)
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

