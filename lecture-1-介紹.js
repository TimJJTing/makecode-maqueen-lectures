input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Sad)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.Confused)
})
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Angry)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallHeart)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Yes)
})
basic.showNumber(0)
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})

