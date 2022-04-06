input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    random = randint(0, 8)
    if (random == 0) {
        basic.showString("Yes")
    } else if (random == 1) {
        basic.showString("No")
    } else if (random == 2) {
        basic.showString("Maybe")
    } else if (random == 3) {
        basic.showString("Prob not")
    } else if (random == 4) {
        basic.showString("Probably")
    } else if (random == 5) {
        basic.showString("Without a doubt")
    } else if (random == 6) {
        basic.showString("Absolutely not")
    } else if (random == 7) {
        basic.showString("I will get back to you in 3-4 business days")
    } else {
        basic.showString("I don't know")
    }
})
let random = 0
basic.showString("Ask ?")
basic.forever(function () {
	
})
