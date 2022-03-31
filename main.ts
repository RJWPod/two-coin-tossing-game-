input.onButtonPressed(Button.AB, function () {
    basic.showString("P1")
    basic.showNumber(P1_WinsPoints)
    basic.pause(100)
    basic.showString("P2")
    basic.showNumber(P2_WinsPoints)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    Coin_1 = randint(0, 1)
    Coin_2 = randint(0, 1)
    if (Coin_1 == 0 && Coin_2 == 0) {
        basic.showString("2h")
        basic.showString("P1Wins")
        P1_WinsPoints += 1
    } else if (Coin_1 == 1 && Coin_2 == 1) {
        basic.showString("2t")
        P1_WinsPoints += 1
        basic.showString("P1Wins")
    } else if (!(Coin_1 == 0 && Coin_2 == 0 || Coin_1 == 1 && Coin_2 == 1)) {
        basic.showString("1h,1t")
        basic.showString("P2Wins")
        P2_WinsPoints += 1
    }
    Coin_1 = 2
    Coin_2 = 2
})
let Coin_2 = 0
let Coin_1 = 0
let P2_WinsPoints = 0
let P1_WinsPoints = 0
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showString("h=heads")
basic.showString("t=tails")
