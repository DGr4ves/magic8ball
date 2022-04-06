def on_gesture_shake():
    global random
    basic.clear_screen()
    random = randint(0, 10)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

random = 0
basic.show_string("Ask ?")

def on_forever():
    pass
basic.forever(on_forever)
