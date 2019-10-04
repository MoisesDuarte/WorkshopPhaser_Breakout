var mainState = {
    preload: function () {

    },

    create: function () {
        // Codigo novo
        game.stage.backgroundColor = '#312e2f';
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.enableBody = true;
    },

    update: function () {

    },
};

var game = new Phaser.Game(400, 450);
game.state.add('main', mainState);
game.state.start('main');