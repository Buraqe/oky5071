function lookAround () {
    basic.pause(1000)
    robotbit.Servo(robotbit.Servos.S1, 30)
    basic.pause(1500)
    rightDistance = sonar.ping(
    DigitalPin.P12,
    DigitalPin.P13,
    PingUnit.Centimeters
    )
    basic.pause(500)
    robotbit.Servo(robotbit.Servos.S1, 180)
    basic.pause(1500)
    leftDistance = sonar.ping(
    DigitalPin.P12,
    DigitalPin.P13,
    PingUnit.Centimeters
    )
    basic.pause(500)
    robotbit.Servo(robotbit.Servos.S1, 110)
    basic.pause(1000)
    if (leftDistance > rightDistance) {
        rotateLeft()
    } else {
        rotateRight()
    }
    basic.pause(500)
    stop()
    basic.pause(1000)
}
function stop () {
    robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Red))
    robotbit.rgb().setBrightness(20)
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    0,
    robotbit.Motors.M2A,
    0
    )
}
input.onButtonPressed(Button.A, function () {
    mode = mode + 1
    if (mode >= 4) {
        mode = 0
    }
    basic.showString("" + (mode))
})
function backwards () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -150,
    robotbit.Motors.M2A,
    150
    )
}
function forward () {
    robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Green))
    robotbit.rgb().setBrightness(20)
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    200,
    robotbit.Motors.M2A,
    -200
    )
}
function rotateLeft () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -100,
    robotbit.Motors.M2A,
    -100
    )
}
input.onGesture(Gesture.ThreeG, function () {
    basic.showIcon(IconNames.Sad)
})
function rotateRight () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    100,
    robotbit.Motors.M2A,
    100
    )
}
let leftDistance = 0
let rightDistance = 0
let mode = 0
basic.showString("" + (mode))
robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Black))
basic.forever(function () {
    if (mode == 1) {
        if (pins.digitalReadPin(DigitalPin.P15) == 0) {
            stop()
            backwards()
            basic.pause(300)
            stop()
            lookAround()
        } else if (pins.digitalReadPin(DigitalPin.P12) == 0) {
            stop()
            backwards()
            basic.pause(300)
            stop()
            lookAround()
        } else {
            forward()
        }
    } else {
        stop()
    }
})
