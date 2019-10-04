var mainState = {
    preload: function() {

    },

    create: function() {

    },

    update: function() {

    },
};

var game = new Phaser.Game(400, 450);
game.state.add('main', mainState);
game.state.start('main');