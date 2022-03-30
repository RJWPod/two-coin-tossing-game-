input.onButtonPressed(Button.AB, function () {
    basic.showString("P1")
    basic.showNumber(P1_WinsPoints)
    basic.pause(100)
    basic.showString("P2")
    basic.showNumber(P2_WinsPoints)
})
input.onGesture(Gesture.Shake, function () {
    Coin_1 = randint(0, 1)
    Coin_2 = randint(0, 1)
    if (Coin_1 == 0 && Coin_2 == 0) {
        basic.showString("2 heads")
        basic.showString("P1 Wins")
        P1_WinsPoints += 1
    }
    if (Coin_1 == 1 && Coin_2 == 1) {
        basic.showString("2 tails")
        P1_WinsPoints += 1
        basic.showString("P1 Wins")
    }
    if (Coin_1 == 1 && (Coin_2 == 0 || Coin_2 == 0 && Coin_1 == 1)) {
        basic.showString("1 heads, 1 tails")
        basic.showString("P2 Wins")
        P2_WinsPoints += 1
    }
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
basic.forever(function () {
	
})
