function stab () {
    player_1.setImage(player_1_ability_list[1])
    blank_proj = sprites.createProjectileFromSprite(img`
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ........................d.........................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        `, player_1, 50, 50)
    pause(50)
    blank_proj.destroy()
    player_1.setImage(player_1_ability_list[0])
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    while (controller.up.isPressed()) {
        player_1.setImage(player_1_move_list[3])
        pause(100)
        player_1.setImage(player_1_move_list[4])
        pause(100)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (player_1_class == "warrior") {
        block()
    } else if (player_1_class == "wizard") {
        heal(info.player1.life())
    } else {
        trap()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (player_1_class == "warrior") {
        swing()
    } else if (player_1_class == "wizard") {
        fireball()
    } else {
        stab()
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (player_2_class == "snake") {
        chomp()
    } else if (player_2_class == "shroom") {
        spore()
    } else {
        dragon_fireball()
    }
})
function phasecheck () {
    if (info.score() < 25) {
        return 1
    } else if (info.score() >= 25 && info.score() < 50) {
        return 2
    } else if (info.score() >= 50) {
        return 3
    } else if (boss_killed) {
        return 4
    }
    return -1
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    while (controller.left.isPressed()) {
        player_1.setImage(player_1_move_list[5])
        player_2.setImage(player_2_move_list[1])
        pause(100)
        player_1.setImage(player_1_move_list[6])
        pause(100)
    }
})
function dragon_fireball () {
    player_2.setImage(player_2_ability_list[1])
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . 2 2 4 4 4 4 2 . . 
        . . . . 2 2 5 5 4 4 4 4 4 4 . . 
        . . 5 5 5 5 4 4 4 4 4 4 4 4 . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . 5 5 2 2 5 4 4 4 4 4 4 4 . . 
        . . . . . . 2 2 5 4 4 4 4 2 . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, player_2, 50, 0)
    pause(200)
    player_2.setImage(player_2_ability_list[0])
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    while (controller.right.isPressed()) {
        player_1.setImage(player_1_move_list[7])
        player_2.setImage(player_2_move_list[0])
        pause(100)
        player_1.setImage(player_1_move_list[8])
        pause(100)
    }
})
function block () {
    player_1.setImage(player_1_ability_list[2])
    pause(1000)
    player_1.setImage(player_1_ability_list[0])
}
function heal (life: number) {
    player_1.setImage(player_1_ability_list[2])
    if (life < 2) {
        info.changeLifeBy(1)
        pause(7000)
    }
    player_1.setImage(player_1_ability_list[0])
}
function fireball () {
    player_1.setImage(player_1_ability_list[1])
    pause(100)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . 2 2 4 4 4 4 2 . . 
        . . . . 2 2 5 5 4 4 4 4 4 4 . . 
        . . 5 5 5 5 4 4 4 4 4 4 4 4 . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . 5 5 2 2 5 4 4 4 4 4 4 4 . . 
        . . . . . . 2 2 5 4 4 4 4 2 . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, player_1, 50, 0)
    pause(100)
    player_1.setImage(player_1_ability_list[0])
}
function trap () {
    player_1.setImage(player_1_ability_list[2])
    tiles.setTileAt(player_1.tilemapLocation(), sprites.swamp.swampTile3)
    pause(100)
    player_1.setImage(player_1_ability_list[0])
}
function spore2 () {
    player_2.setImage(player_2_ability_list[1])
    pause(500)
    for (let index = 0; index < 5; index++) {
        spore = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . . . 7 . . . . . . 
            . . . . . 7 7 7 7 . . . . . . . 
            . . 7 . . . 7 7 7 . . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . . 7 . . 7 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player_2, randint(-25, 25), randint(-25, 25))
    }
    player_2.setImage(player_2_ability_list[0])
}
function character_spawner () {
    if (player_1_class == "warrior") {
        player_1 = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        player_1_move_list = [
        img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,
        img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,
        img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `,
        img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f f 2 f e f . . 
            . . f f f 2 f e e 2 2 f f f . . 
            . . f e 2 f f e e 2 f e e f . . 
            . f f e f f e e e f e e e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . . e f f f f f f f f 4 e . . 
            . . . 4 f 2 2 2 2 2 e d d 4 . . 
            . . . e f f f f f f e e 4 . . . 
            . . . . f f f . . . . . . . . . 
            `,
        img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e f 2 f f f 2 f 2 e f . . 
            . . f f f 2 2 e e f 2 f f f . . 
            . . f e e f 2 e e f f 2 e f . . 
            . f f e e e f e e e f f e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f e . . . 
            . . 4 d d e 2 2 2 2 2 f 4 . . . 
            . . . 4 e e f f f f f f e . . . 
            . . . . . . . . . f f f . . . . 
            `,
        img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,
        img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,
        img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 2 2 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,
        img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `
        ]
        player_1_ability_list = [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, img`
            .......ff...............
            ....ffff2ff.............
            ..ffeeeef2ff............
            .ffeeeeef22ff...........
            .feeeeffeeeef...........
            .fffffee2222ef..........
            fffe222ffffe2f..........
            ffffffffeeefff..........
            fefe44ebf44eef..........
            .fee4d4bfddef...........
            ..feee4dddee.c..........
            ...f2222eeddeccccccc....
            ...f444e44ddecddddddc...
            ...fffffeeee.ccccccc....
            ..ffffffff...c..........
            ..fff..ff...............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `, img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f f f f d d d d d e e f . . 
            . f d d d d f 4 4 4 e e f . . . 
            . f b b b b f 2 2 2 2 f 4 e . . 
            . f b b b b f 2 2 2 2 f d 4 . . 
            . . f c c f 4 5 5 4 4 f 4 4 . . 
            . . . f f f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `]
        info.player1.setLife(5)
    } else if (player_1_class == "wizard") {
        player_1 = sprites.create(img`
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f b 3 e 4 4 4 4 e 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 e b 3 e e 3 b e 3 3 f . 
            . f 3 3 f f e e e e f f 3 3 f . 
            . f b b f b f e e f b f b b f . 
            . f b b e 1 f 4 4 f 1 e b b f . 
            f f b b f 4 4 4 4 4 4 f b b f f 
            f b b f f f e e e e f f f b b f 
            . f e e f b d d d d b f e e f . 
            . . e 4 c d d d d d d c 4 e . . 
            . . e f b d b d b d b b f e . . 
            . . . f f 1 d 1 d 1 d f f . . . 
            . . . . . f f b b f f . . . . . 
            `, SpriteKind.Player)
        player_1_move_list = [
        img`
            . . . . . . . f f . . . . . . . 
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f b 3 e 4 4 4 4 e 3 b f . . 
            . f e 3 3 3 3 3 3 3 3 3 3 e f . 
            . f 3 3 e b 3 e e 3 b e 3 3 f . 
            . f b 3 f f e e e e f f 3 b f . 
            f f b b f b f e e f b f b b f f 
            f b b b e 1 f 4 4 f 1 e b b b f 
            . f b b e e 4 4 4 4 4 f b b f . 
            . . f 4 4 4 e d d d b f e f . . 
            . . f e 4 4 e d d d d c 4 e . . 
            . . . f e e d d b d b b f e . . 
            . . . f f 1 d 1 d 1 1 f f . . . 
            . . . . . f f f b b f . . . . . 
            `,
        img`
            . . . . . . . f f . . . . . . . 
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f b 3 e 4 4 4 4 e 3 b f . . 
            . f e 3 3 3 3 3 3 3 3 3 3 e f . 
            . f 3 3 e b 3 e e 3 b e 3 3 f . 
            . f b 3 f f e e e e f f 3 b f . 
            f f b b f b f e e f b f b b f f 
            f b b b e 1 f 4 4 f 1 e b b b f 
            . f b b f 4 4 4 4 4 e e b b f . 
            . . f e f b d d d e 4 4 4 f . . 
            . . e 4 c d d d d e 4 4 e f . . 
            . . e f b b d b d d e e f . . . 
            . . . f f 1 1 d 1 d 1 f f . . . 
            . . . . . f b b f f f . . . . . 
            `,
        img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 3 3 3 3 3 3 e f . . . 
            . . f b 3 3 3 3 3 3 3 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f b 3 3 3 3 3 3 3 3 3 3 b f . 
            . f b b 3 3 3 3 3 3 3 3 b b f . 
            . f b b b b b b b b b b b b f . 
            . f b b b b b b b b b b b b c f 
            . f c b b b b b b b b b b b b f 
            . . f c b b b b b b b b b b f f 
            . . c e f f f f f f f c c c f . 
            . . e 4 4 e d d b d b b f . . . 
            . . . f e e d 1 d 1 1 f f . . . 
            . . . . . f f f b b f . . . . . 
            `,
        img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 3 3 3 3 3 3 e f . . . 
            . . f b 3 3 3 3 3 3 3 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f b 3 3 3 3 3 3 3 3 3 3 b f . 
            . f b b 3 3 3 3 3 3 3 3 b b f . 
            . f b b b b b b b b b b b b f . 
            f c b b b b b b b b b b b b f . 
            f b b b b b b b b b b b b c f . 
            f f b b b b b b b b b b c f . . 
            . f c c c f f f f f f f e c . . 
            . . . f b b d b d d e 4 4 e . . 
            . . . f f 1 1 d 1 d e e f . . . 
            . . . . . f b b f f f . . . . . 
            `,
        img`
            . . . f 4 4 f f f f . . . . . . 
            . . f 4 5 5 4 5 f b f f . . . . 
            . . f 5 5 5 5 4 e 3 3 b f . . . 
            . . f e 4 4 4 e 3 3 3 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 e e 3 b e 3 3 3 3 f . . 
            . f 3 3 e e e f f 3 3 3 3 f . . 
            . f 3 e e e f b f b b b b f . . 
            . . f e 4 4 f 1 e b b b b f . . 
            . . . f 4 4 4 4 f b b b b f f . 
            . . . f e e e f f f b b b b f . 
            . . . f d d d e 4 4 f b b f . . 
            . . . f d d d e 4 4 e f f . . . 
            . . f b d b d b e e b f . . . . 
            . . f f 1 d 1 d 1 d f f . . . . 
            . . . . f f b b f f . . . . . . 
            `,
        img`
            . . . . . . . . . . . . . . . . 
            . . . f 4 4 f f f f . . . . . . 
            . . f 4 5 5 4 5 f b f f . . . . 
            . . f 5 5 5 5 4 e 3 3 b f . . . 
            . . f e 4 4 4 e 3 3 3 3 b f . . 
            . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 e e 3 b e 3 3 3 3 f . . 
            . f 3 3 e e e f f 3 3 3 3 f . . 
            . . f e e e f b f b b b b f f . 
            . . . e 4 4 f 1 e b b b b b f . 
            . . . f 4 4 4 4 f b b b b b f . 
            . . . f d d d e 4 4 b b b f . . 
            . . . f d d d e 4 4 f f f . . . 
            . . f d d d b b e e b b f . . . 
            . . f b d 1 d 1 d d b f . . . . 
            . . . f f f b b f f f . . . . . 
            `,
        img`
            . . . . . . f f f f 4 4 f . . . 
            . . . . f f b f 5 4 5 5 4 f . . 
            . . . f b 3 3 e 4 5 5 5 5 f . . 
            . . f b 3 3 3 3 e 4 4 4 e f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . . f 3 3 3 3 e b 3 e e 3 3 f . 
            . . f 3 3 3 3 f f e e e 3 3 f . 
            . . f b b b b f b f e e e 3 f . 
            . . f b b b b e 1 f 4 4 e f . . 
            . f f b b b b f 4 4 4 4 f . . . 
            . f b b b b f f f e e e f . . . 
            . . f b b f 4 4 e d d d f . . . 
            . . . f f e 4 4 e d d d f . . . 
            . . . . f b e e b d b d b f . . 
            . . . . f f d 1 d 1 d 1 f f . . 
            . . . . . . f f b b f f . . . . 
            `,
        img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f 4 4 f . . . 
            . . . . f f b f 5 4 5 5 4 f . . 
            . . . f b 3 3 e 4 5 5 5 5 f . . 
            . . f b 3 3 3 3 e 4 4 4 e f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
            . . f 3 3 3 3 e b 3 e e 3 3 f . 
            . . f 3 3 3 3 f f e e e 3 3 f . 
            . f f b b b b f b f e e e f . . 
            . f b b b b b e 1 f 4 4 e . . . 
            . f b b b b b f 4 4 4 4 f . . . 
            . . f b b b 4 4 e d d d f . . . 
            . . . f f f 4 4 e d d d f . . . 
            . . . f b b e e b b d d d f . . 
            . . . . f b d d 1 d 1 d b f . . 
            . . . . . f f f b b f f f . . . 
            `
        ]
        player_1_ability_list = [img`
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f b 3 e 4 4 4 4 e 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 e b 3 e e 3 b e 3 3 f . 
            . f 3 3 f f e e e e f f 3 3 f . 
            . f b b f b f e e f b f b b f . 
            . f b b e 1 f 4 4 f 1 e b b f . 
            f f b b f 4 4 4 4 4 4 f b b f f 
            f b b f f f e e e e f f f b b f 
            . f e e f b d d d d b f e e f . 
            . . e 4 c d d d d d d c 4 e . . 
            . . e f b d b d b d b b f e . . 
            . . . f f 1 d 1 d 1 d f f . . . 
            . . . . . f f b b f f . . . . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f 4 4 f . . . 
            . . . . f f 2 f 5 4 5 5 4 f . . 
            . . . f 2 2 2 e 4 5 5 5 5 f . . 
            . . f 2 2 2 2 2 e 4 4 4 e f . . 
            . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
            . . f 2 2 2 2 e 2 2 e e 2 2 f . 
            . . f 2 2 2 2 f f e e e 2 2 f . 
            . f f 2 2 2 2 f b f e e e f . . 
            . f 2 2 2 2 2 e 1 f 4 4 e . . . 
            . f 2 2 2 2 2 f 4 4 4 4 f . . . 
            . . f 2 2 2 4 4 e d d d f . . . 
            . . . f f f 4 4 e d d d f . . . 
            . . . f b b e e b b d d d f . . 
            . . . . f b d d 1 d 1 d b f . . 
            . . . . . f f f b b f f f . . . 
            `, img`
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 4 5 5 5 5 4 e f . . . 
            . . f 7 7 e 4 4 4 4 e 7 7 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 e 7 7 e e 7 7 e 7 7 f . 
            . f 7 7 f f e e e e f f 7 7 f . 
            . f 7 7 f b f e e f b f 7 7 f . 
            . f 7 7 e 1 f 4 4 f 1 e 7 7 f . 
            f f 7 7 f 4 4 4 4 4 4 f 7 7 f f 
            f 7 7 f f f e e e e f f f 7 7 f 
            . f e e f b d d d d b f e e f . 
            . . e 4 c d d d d d d c 4 e . . 
            . . e f b d b d b d b b f e . . 
            . . . f f 1 d 1 d 1 d f f . . . 
            . . . . . f f b b f f . . . . . 
            `]
        info.player1.setLife(3)
    } else if (player_1_class == "rogue") {
        player_1 = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . f f f f b f f f f b f f f f . 
            . f f f f 1 f f f f 1 f f f f . 
            . . f f f f f f f f f f f f . . 
            . . . f f f f f f f f f f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f f f f f f f f d 4 . . 
            . . 4 4 f f f f f f f f 4 4 . . 
            . . . . f f f f f f f f . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        player_1_move_list = [
        img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . f f f f b f f f f b f f f f . 
            . f f f f 1 f f f f 1 f f f f . 
            . . f f f f f f f f f f f f . . 
            . . . f f f f f f f f f f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f f f f f f f f d 4 . . 
            . . 4 4 f f f f f f f f 4 4 . . 
            . . . . f f f f f f f f . . . . 
            . . . . . f f . . f f . . . . . 
            `,
        img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . f f f f f f f f f f f f f f . 
            . f f f f f f f f f f f f f f . 
            . . f f f b f f f f b f f f . . 
            . . f f f 1 f f f f 1 f f f . . 
            . . . f f f f f f f e e f f . . 
            . . f e f f f f f e d d e f . . 
            . . e 4 f f f f f e d d e f . . 
            . . . . f f f f f f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,
        img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . f f f f f f f f f f f f f f . 
            . f f f f f f f f f f f f f f . 
            . . f f f b f f f f b f f f . . 
            . . f f f 1 f f f f 1 f f f . . 
            . . f f e e f f f f f f f . . . 
            . . f e d d f f f f f f e f . . 
            . . . e d d f f f f f f 4 e . . 
            . . . . e e f f f f f f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `,
        img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . f f f f f f f f f f f f f f . 
            . f f f f f f f f f f f f f f . 
            . . . f f f f f f f f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . 4 f f f f f f e d d . . . 
            . . . e f f f f f f e e 4 . . . 
            . . . . f f f . . . . . . . . . 
            `,
        img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f f f f f f f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . f f f f f f f f f f f f f f . 
            . f f f f f f f f f f f f f f . 
            . . . f f f f f f f f f f . . . 
            . . . e f f f f f f f f f . . . 
            . . . 4 d e f f f f f f 4 . . . 
            . . . e e e f f f f f f e . . . 
            . . . . . . . . . f f f . . . . 
            `,
        img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f f f f f f f f f . . . . 
            . . f f f f f f f f f f f . . . 
            . . f f f f f f f f f f f . . . 
            . f f f f f f f f f f f f . . . 
            . f f f f f f f f f f f f . . . 
            . f f f f f f f f f f f f f . . 
            . f f f b f f f f f f f f f . . 
            . . f f 1 f f f f f f f f f . . 
            . . . f f f f f f f f f f . . . 
            . . . f f f f f f f f f . . . . 
            . . . f f f f f f f f . . . . . 
            . . f f f f f f f f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,
        img`
            . . . . f f f f f f . . . . . . 
            . . . f f f f f f f f f . . . . 
            . . f f f f f f f f f f f . . . 
            . . f f f f f f f f f f f . . . 
            . f f f f f f f f f f f f . . . 
            . f f f f f f f f f f f f . . . 
            . f f f f f f f f f f f f f . . 
            . f f f f b f f f f f f f f . . 
            . . f f f 1 f f f f f f f f . . 
            . . . f f f f f f f f f f . . . 
            . . . f f f f f f f f f . . . . 
            . . . f f f f f f f f . . . . . 
            . . . f f f f f f f f . . . . . 
            . . . f f f f f f f f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,
        img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f f f f f f f f . . . 
            . . . f f f f f f f f f f f . . 
            . . . f f f f f f f f f f f . . 
            . . . f f f f f f f f f f f f . 
            . . . f f f f f f f f f f f f . 
            . . f f f f f f f f b f f f f . 
            . . f f f f f f f f 1 f f f f . 
            . . f f f f f f f f f f f f . . 
            . . . f f f f f f f f f f . . . 
            . . . . . f f f f f f f f . . . 
            . . . . . f f f f f f f f . . . 
            . . . . f f f f f f f f f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,
        img`
            . . . . . . f f f f f f . . . . 
            . . . . f f f f f f f f f . . . 
            . . . f f f f f f f f f f f . . 
            . . . f f f f f f f f f f f . . 
            . . . f f f f f f f f f f f f . 
            . . . f f f f f f f f f f f f . 
            . . f f f f f f f f f f f f f . 
            . . f f f f f f f f b f f f f . 
            . . f f f f f f f f 1 f f f . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f f f f f f f f . . . 
            . . . . . f f f f f f f f . . . 
            . . . . . f f f f f f f f . . . 
            . . . . . f f f f f f f f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `
        ]
        player_1_ability_list = [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . f f f f b f f f f b f f f f . 
            . f f f f 1 f f f f 1 f f f f . 
            . . f f f f f f f f f f f f . . 
            . . . f f f f f f f f f f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f f f f f f f f d 4 . . 
            . . 4 4 f f f f f f f f 4 4 . . 
            . . . . f f f f f f f f . . . . 
            . . . . . f f . . f f . . . . . 
            `, img`
            . . . . . . f f f f f f . . . . 
            . . . . f f f f f f f f f . . . 
            . . . f f f f f f f f f f f . . 
            . . . f f f f f f f f f f f . . 
            . . . f f f f f f f f f f f f . 
            . . . f f f f f f f f f f f f . 
            . . f f f f f f f f f f f f f . 
            . . f f f f f f f f b f f f f . 
            . . f f f f f f f f 1 f f f . . 
            . . . f f f f f f f f f f b b . 
            . . . . f f f f f f f f f d d b 
            . . . . . f f f f f f f f b b . 
            . . . . . f f f f f f f f . . . 
            . . . . . f f f f f f f f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `, img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . f f f f f f f f f f f f f f . 
            . f f f f f f f f f f f f f f . 
            . . f f f f f f f f f f f f . . 
            . . . f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . . . . f f f f f f f f . . . . 
            . . . . . f f . . f f . . . . . 
            `]
        info.player1.setLife(1)
    } else {
        player_1_class = game.askForString("what class will you be P1? please use a correct input.")
        character_spawner()
    }
    if (player_2_class == "dragon") {
        player_2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c 5 5 5 5 c c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c 5 5 5 f 1 5 5 5 5 5 c 
            . . 4 4 4 4 5 5 f f 5 5 5 5 5 c 
            . . e 4 e 4 e 5 5 5 5 5 5 5 5 c 
            . . 4 e 4 e 4 4 5 5 b 1 b b c c 
            . . c d d d 4 4 5 5 5 3 3 3 5 c 
            . . c d d d 5 5 5 5 5 5 5 5 b . 
            . c c d d d d b 5 5 c b b c . . 
            c d c d d d d b b 5 5 c b b c . 
            c d d d d d d d d c c c c c c . 
            . c d d d b 5 5 d c c c c . . . 
            . . c c c b 5 5 b c c c c c . . 
            . . . . c b 5 5 d c b b b c . . 
            `, SpriteKind.Player)
        player_2_move_list = [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c 5 5 5 5 c c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c 5 5 5 f 1 5 5 5 5 5 c 
            . . 4 4 4 4 5 5 f f 5 5 5 5 5 c 
            . . e 4 e 4 e 5 5 5 5 5 5 5 5 c 
            . . 4 e 4 e 4 4 5 5 b 1 b b c c 
            . . c d d d 4 4 5 5 5 3 3 3 5 c 
            . . c d d d 5 5 5 5 5 5 5 5 b . 
            . c c d d d d b 5 5 c b b c . . 
            c d c d d d d b b 5 5 c b b c . 
            c d d d d d d d d c c c c c c . 
            . c d d d b 5 5 d c c c c . . . 
            . . c c c b 5 5 b c c c c c . . 
            . . . . c b 5 5 d c b b b c . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 4 4 4 4 . . 
            c 5 5 5 5 5 5 5 5 e 4 e 4 e . . 
            c c b b 1 b 5 5 4 4 e 4 e 4 . . 
            c 5 3 3 3 5 5 5 4 4 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c c . 
            . c b b c 5 5 b b d d d d c d c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c . 
            . . c c c c c b 5 5 b c c c . . 
            . . c b b b c d 5 5 b c . . . . 
            `]
        player_2_ability_list = [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c 5 5 5 5 c c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c 5 5 5 f 1 5 5 5 5 5 c 
            . . 4 4 4 4 5 5 f f 5 5 5 5 5 c 
            . . e 4 e 4 e 5 5 5 5 5 5 5 5 c 
            . . 4 e 4 e 4 4 5 5 b 1 b b c c 
            . . c d d d 4 4 5 5 5 3 3 3 5 c 
            . . c d d d 5 5 5 5 5 5 5 5 b . 
            . c c d d d d b 5 5 c b b c . . 
            c d c d d d d b b 5 5 c b b c . 
            c d d d d d d d d c c c c c c . 
            . c d d d b 5 5 d c c c c . . . 
            . . c c c b 5 5 b c c c c c . . 
            . . . . c b 5 5 d c b b b c . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c 5 5 5 5 c c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c 5 5 5 f 1 5 5 5 5 5 c 
            . . 4 4 4 4 5 5 f f 5 5 5 5 5 c 
            . . e 4 e 4 e 5 5 5 5 5 5 5 5 c 
            . . 4 e 4 e 4 4 5 5 b 1 b b c c 
            . . c d d d 4 4 5 5 5 3 3 3 4 4 
            . . c d d d 5 5 5 5 5 3 4 4 4 4 
            . c c d d d d b 5 5 c 3 3 3 4 4 
            c d c d d d d b b 5 5 c b b c . 
            c d d d d d d d d c c c c c c . 
            . c d d d b 5 5 d c c c c . . . 
            . . c c c b 5 5 b c c c c c . . 
            . . . . c b 5 5 d c b b b c . . 
            `]
    } else if (player_2_class == "snake") {
        player_2 = sprites.create(img`
            . . . . . . c c c c c c . . . . 
            . . . . . c 6 7 7 7 7 6 c . . . 
            . . . . c 7 7 7 7 7 7 7 7 c . . 
            . . . c 6 7 7 7 7 7 7 7 7 6 c . 
            . . . c 7 7 7 c 6 6 6 6 c 7 c . 
            . . . f 7 7 7 6 f 6 6 f 6 7 f . 
            . . . f 7 7 7 7 7 7 7 7 7 7 f . 
            . . c f 6 7 7 c 6 7 7 7 7 f . . 
            . c 7 7 f 6 7 7 c c c c f . . . 
            c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
            c c 6 7 7 6 c f c 7 7 2 7 7 c . 
            . . c 6 6 6 c c f 6 7 1 1 1 1 c 
            . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
            . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
            . . . f 6 6 6 1 1 1 1 1 1 6 f . 
            . . . . f c c c c c c c c c . . 
            `, SpriteKind.Player)
        player_2_move_list = [img`
            . . . . . . c c c c c c . . . . 
            . . . . . c 6 7 7 7 7 6 c . . . 
            . . . . c 7 7 7 7 7 7 7 7 c . . 
            . . . c 6 7 7 7 7 7 7 7 7 6 c . 
            . . . c 7 7 7 c 6 6 6 6 c 7 c . 
            . . . f 7 7 7 6 f 6 6 f 6 7 f . 
            . . . f 7 7 7 7 7 7 7 7 7 7 f . 
            . . c f 6 7 7 c 6 7 7 7 7 f . . 
            . c 7 7 f 6 7 7 c c c c f . . . 
            c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
            c c 6 7 7 6 c f c 7 7 2 7 7 c . 
            . . c 6 6 6 c c f 6 7 1 1 1 1 c 
            . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
            . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
            . . . f 6 6 6 1 1 1 1 1 1 6 f . 
            . . . . f c c c c c c c c c . . 
            `, img`
            . . . . c c c c c c . . . . . . 
            . . . c 6 7 7 7 7 6 c . . . . . 
            . . c 7 7 7 7 7 7 7 7 c . . . . 
            . c 6 7 7 7 7 7 7 7 7 6 c . . . 
            . c 7 c 6 6 6 6 c 7 7 7 c . . . 
            . f 7 6 f 6 6 f 6 7 7 7 f . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f . . . 
            . . f 7 7 7 7 6 c 7 7 6 f c . . 
            . . . f c c c c 7 7 6 f 7 7 c . 
            . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
            . c 7 7 2 7 7 c f c 6 7 7 6 c c 
            c 1 1 1 1 7 6 f c c 6 6 6 c . . 
            f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
            f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
            . f 6 1 1 1 1 1 1 6 6 6 f . . . 
            . . c c c c c c c c c f . . . . 
            `]
        player_2_ability_list = [img`
            . . . . . . c c c c c c . . . . 
            . . . . . c 6 7 7 7 7 6 c . . . 
            . . . . c 7 7 7 7 7 7 7 7 c . . 
            . . . c 6 7 7 7 7 7 7 7 7 6 c . 
            . . . c 7 7 7 c 6 6 6 6 c 7 c . 
            . . . f 7 7 7 6 f 6 6 f 6 7 f . 
            . . . f 7 7 7 7 7 7 7 7 7 7 f . 
            . . c f 6 7 7 c 6 7 7 7 7 f . . 
            . c 7 7 f 6 7 7 c c c c f . . . 
            c 7 7 7 7 f c 6 7 7 7 2 7 c . . 
            c c 6 7 7 6 c f c 7 7 2 7 7 c . 
            . . c 6 6 6 c c f 6 7 1 1 1 1 c 
            . . f 6 6 6 6 c 6 6 1 1 1 1 1 f 
            . . f c 6 6 6 6 6 1 1 1 1 1 6 f 
            . . . f 6 6 6 1 1 1 1 1 1 6 f . 
            . . . . f c c c c c c c c c . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . c c c c c 
            . . . . . . . . . c c 7 7 7 6 c 
            . . . . . . . . c c 7 7 7 c c . 
            . . . . . . . . c 6 7 7 c . . . 
            . . . . . . . . c 6 6 6 c . . . 
            . . . c c c c c c 6 6 6 c c . . 
            . . c 6 7 7 7 7 6 c c 6 6 6 c . 
            . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
            c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
            c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
            f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
            f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
            . c 1 c f f 1 c 7 6 f 6 6 c c . 
            . c c c c c c c c c c c c . . . 
            `]
    } else if (player_2_class == "shroom") {
        player_2 = sprites.create(img`
            . . . . b b b b . . . . . . . . 
            . . . b 3 3 3 3 b b b b . . . . 
            . . b b 3 3 3 3 3 1 1 b b c c . 
            . . b 1 1 3 3 3 3 3 1 1 3 3 c c 
            . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
            . . c 3 3 3 3 3 3 3 c c c b b f 
            . c 3 3 3 3 3 b b b b c c c b f 
            c 3 3 3 3 b b d d d d d c c b f 
            c 3 3 c b d d d d d d c d c c . 
            f 3 c c c d d d c d d c d b c . 
            f b c c c d d d c d d d d d f . 
            f b c c c d d d d d b b b d f . 
            f f b b c b d d d d d d d c . . 
            . f f f f b c c d d d d f f . . 
            . . f b d d b c c f f b b f f . 
            . . f d d d b . . f f b b b f . 
            `, SpriteKind.Player)
        player_2_move_list = [img`
            . . . . b b b b . . . . . . . . 
            . . . b 3 3 3 3 b b b b . . . . 
            . . b b 3 3 3 3 3 1 1 b b c c . 
            . . b 1 1 3 3 3 3 3 1 1 3 3 c c 
            . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
            . . c 3 3 3 3 3 3 3 c c c b b f 
            . c 3 3 3 3 3 b b b b c c c b f 
            c 3 3 3 3 b b d d d d d c c b f 
            c 3 3 c b d d d d d d c d c c . 
            f 3 c c c d d d c d d c d b c . 
            f b c c c d d d c d d d d d f . 
            f b c c c d d d d d b b b d f . 
            f f b b c b d d d d d d d c . . 
            . f f f f b c c d d d d f f . . 
            . . f b d d b c c f f b b f f . 
            . . f d d d b . . f f b b b f . 
            `, img`
            . . . . . . . . b b b b . . . . 
            . . . . b b b b 3 3 3 3 b . . . 
            . c c b b 1 1 3 3 3 3 3 b b . . 
            c c 3 3 1 1 3 3 3 3 3 1 1 b . . 
            c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
            f b b c c c 3 3 3 3 3 3 3 c . . 
            f b c c c b b b b 3 3 3 3 3 c . 
            f b c c d d d d d b b 3 3 3 3 c 
            . c c d c d d d d d d b c 3 3 c 
            . c b d c d d c d d d c c c 3 f 
            . f d d d d d c d d d c c c b f 
            . f d b b b d d d d d c c c b f 
            . . c d d d d d d d b c b b f f 
            . . f f d d d d c c b f f f f . 
            . f f b b f f c c b d d b f . . 
            . f b b b f f . . b d d d f . . 
            `]
        player_2_ability_list = [img`
            . . . . b b b b . . . . . . . . 
            . . . b 3 3 3 3 b b b b . . . . 
            . . b b 3 3 3 3 3 1 1 b b c c . 
            . . b 1 1 3 3 3 3 3 1 1 3 3 c c 
            . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
            . . c 3 3 3 3 3 3 3 c c c b b f 
            . c 3 3 3 3 3 b b b b c c c b f 
            c 3 3 3 3 b b d d d d d c c b f 
            c 3 3 c b d d d d d d c d c c . 
            f 3 c c c d d d c d d c d b c . 
            f b c c c d d d c d d d d d f . 
            f b c c c d d d d d b b b d f . 
            f f b b c b d d d d d d d c . . 
            . f f f f b c c d d d d f f . . 
            . . f b d d b c c f f b b f f . 
            . . f d d d b . . f f b b b f . 
            `, img`
            . . . . b b b b . . . . . . . . 
            . . . b 7 7 7 7 b b b b . . . . 
            . . b b 7 7 7 7 7 5 5 b b c c . 
            . . b 5 5 7 7 7 7 7 5 5 7 7 c c 
            . . b 5 5 7 7 7 7 7 7 7 7 7 b c 
            . . c 7 7 7 7 7 7 7 c c c b b f 
            . c 7 7 7 7 7 b b b b c c c b f 
            c 7 7 7 7 b b d d d d d c c b f 
            c 7 7 c b d d d d d d c d c c . 
            f 7 c c c d d d c d d c d b c . 
            f b c c c d d d c d d d d d f . 
            f b c c c d d d d d b b b d f . 
            f f b b c b d d d d d d d c . . 
            . f f f f b c c d d d d f f . . 
            . . f b d d b c c f f b b f f . 
            . . f d d d b . . f f b b b f . 
            `]
    } else {
        player_2_class = game.askForString("what pet will you be P2? please use a correct input.")
        player_1.destroy()
        character_spawner()
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    while (controller.down.isPressed()) {
        player_1.setImage(player_1_move_list[1])
        pause(100)
        player_1.setImage(player_1_move_list[2])
        pause(100)
    }
})
function chomp () {
    player_2.setImage(player_2_ability_list[1])
    blank_proj = sprites.createProjectileFromSprite(img`
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ........................d.........................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        `, player_1, 50, 50)
    pause(100)
    blank_proj.destroy()
    player_2.setImage(player_2_ability_list[0])
}
function swing () {
    player_1.setImage(player_1_ability_list[1])
    blank_proj = sprites.createProjectileFromSprite(img`
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ........................d.........................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        `, player_1, 50, 0)
    pause(200)
    blank_proj.destroy()
    player_1.setImage(player_1_ability_list[0])
}
let enemybad: Sprite = null
let spore: Sprite = null
let projectile: Sprite = null
let player_2_ability_list: Image[] = []
let player_2_move_list: Image[] = []
let player_1_move_list: Image[] = []
let blank_proj: Sprite = null
let player_1_ability_list: Image[] = []
let player_2: Sprite = null
let player_1: Sprite = null
let boss_killed = false
let player_2_class = ""
let player_1_class = ""
let started = false
game.splash("classes are warrior, wizard or rogue.")
player_1_class = game.askForString("what class will you be P1?")
game.splash("pets are dragon, snake or shroom.")
player_2_class = game.askForString("what pet will you be P2?")
tiles.setCurrentTilemap(tilemap`level1`)
tiles.setTileAt(tiles.getTileLocation(1, 1), sprites.dungeon.floorLight2)
character_spawner()
info.setScore(0)
boss_killed = false
tiles.placeOnTile(player_1, tiles.getTileLocation(2, 2))
scene.cameraFollowSprite(player_1)
controller.player2.moveSprite(player_2, 0, 0)
controller.moveSprite(player_1)
started = true
forever(function () {
    player_2.setPosition(player_1.x - 20, player_1.y - 20)
})
game.onUpdateInterval(500, function () {
    if (started) {
        if (phasecheck() == 1) {
            enemybad = sprites.createProjectileFromSide(img`
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f1111111dbf......
                ......fd1111111ddf......
                ......fd111111dddf......
                ......fd111ddddddf......
                ......fd111ddddddf......
                ......fd1dddddddbf......
                ......fd1dfbddbbff......
                ......fbddfcdbbcf.......
                .....ffffccddbfff.......
                ....fcb1bbbfcffff.......
                ....f1b1dcffffffff......
                ....fdfdf..ffffffffff...
                .....f.f.....ffffff.....
                ........................
                ........................
                ........................
                ........................
                ........................
                `, -50, randint(-20, 20))
        } else if (phasecheck() == 2) {
            for (let index = 0; index < 2; index++) {
                enemybad = sprites.createProjectileFromSide(img`
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    ..........ffff..........
                    ........ff7777f.........
                    .......f7777777f........
                    ......f777777777f.......
                    .....f7777f777f77f......
                    .....f777f777ff777f.....
                    ....f77777777777777f....
                    ...f7777777777777777f...
                    ..f77777ffffffff7777f...
                    ..f7777f77777777f7777f..
                    ..f777777777777777777f..
                    ...ffffffffffffffffff...
                    ........................
                    ........................
                    ........................
                    ........................
                    ........................
                    `, -20, randint(-20, 20))
            }
        } else if (phasecheck() == 3) {
            for (let index = 0; index < 3; index++) {
                enemybad = sprites.createProjectileFromSide(img`
                    . . f f f . . . . . . . . f f f 
                    . f f c c . . . . . . f c b b c 
                    f f c c . . . . . . f c b b c . 
                    f c f c . . . . . . f b c c c . 
                    f f f c c . c c . f c b b c c . 
                    f f c 3 c c 3 c c f b c b b c . 
                    f f b 3 b c 3 b c f b c c b c . 
                    . c 1 b b b 1 b c b b c c c . . 
                    . c 1 b b b 1 b b c c c c . . . 
                    c b b b b b b b b b c c . . . . 
                    c b 1 f f 1 c b b b b f . . . . 
                    f f 1 f f 1 f b b b b f c . . . 
                    f f 2 2 2 2 f b b b b f c c . . 
                    . f 2 2 2 2 b b b b c f . . . . 
                    . . f b b b b b b c f . . . . . 
                    . . . f f f f f f f . . . . . . 
                    `, -50, randint(-10, 10))
            }
        } else if (phasecheck() == 4) {
            for (let index = 0; index < 4; index++) {
                enemybad = sprites.createProjectileFromSide(img`
                    ...........fffffff...ccfff..........
                    ..........fbbbbbbbffcbbbbf..........
                    ..........fbb111bbbbbffbf...........
                    ..........fb11111ffbbbbff...........
                    ..........f1cccc1ffbbbbbcff.........
                    ..........ffc1c1c1bbcbcbcccf........
                    ...........fcc3331bbbcbcbcccf..ccccc
                    ............c333c1bbbcbcbccccfcddbbc
                    ............c333c1bbbbbbbcccccddbcc.
                    ............c333c11bbbbbccccccbbcc..
                    ...........cc331c11bbbbccccccfbccf..
                    ...........cc13c11cbbbcccccbbcfccf..
                    ...........c111111cbbbfdddddc.fbbcf.
                    ............cc1111fbdbbfdddc...fbbf.
                    ..............cccfffbdbbfcc.....fbbf
                    ....................fffff........fff
                    `, -100, randint(-50, 50))
            }
        } else {
        	
        }
    }
})
