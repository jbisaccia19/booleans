controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    left = !(left)
})
function testFunction () {
    left = false
}
let projectile: Sprite = null
let left = false
testFunction()
game.onUpdateInterval(500, function () {
    if (left) {
        projectile = sprites.createProjectile(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 9 9 . . . . . . . . . 
            . . . . . 9 . 9 9 . . . . . . . 
            . . . . . 9 . . . 9 9 . . . . . 
            . . . . . 9 . . . . . 9 9 . . . 
            . . . . . 9 . . . . . . . 9 9 . 
            . . . . . 9 . . . . . . . . . 9 
            . . . . . 9 . . . . . . . 9 9 . 
            . . . . . 9 . . . . . 9 9 . . . 
            . . . . . 9 . . . 9 9 . . . . . 
            . . . . . 9 . 9 9 . . . . . . . 
            . . . . . 9 9 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, randint(50, 100), 0, SpriteKind.Player)
    } else {
        projectile = sprites.createProjectile(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 7 7 . . . . . 
            . . . . . . . 7 7 . 7 . . . . . 
            . . . . . 7 7 . . . 7 . . . . . 
            . . . 7 7 . . . . . 7 . . . . . 
            . 7 7 . . . . . . . 7 . . . . . 
            7 . . . . . . . . . 7 . . . . . 
            . 7 7 . . . . . . . 7 . . . . . 
            . . . 7 7 . . . . . 7 . . . . . 
            . . . . . 7 7 . . . 7 . . . . . 
            . . . . . . . 7 7 . 7 . . . . . 
            . . . . . . . . . 7 7 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, randint(-100, -50), 0, SpriteKind.Player)
    }
    projectile.y = randint(0, scene.screenHeight())
})
