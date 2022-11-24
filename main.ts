function blanc () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) >= 450 && pins.analogReadPin(AnalogPin.P0) <= 550) {
        blanc()
    }
    if (pins.analogReadPin(AnalogPin.P0) < 450) {
        rouge()
    }
    if (pins.analogReadPin(AnalogPin.P0) > 550) {
        vert()
    }
})
