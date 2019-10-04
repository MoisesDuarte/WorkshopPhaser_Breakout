var mainState = {
    preload: function () {
        // Codigo novo
        game.load.image('palheta', 'assets/images/palheta.png');
    },

    create: function () {
        game.stage.backgroundColor = '#312e2f';
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.enableBody = true;

        // Codigo novo
        this.esquerda = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.direita = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        this.palheta = game.add.sprite(160, 400, 'palheta');
        this.palheta.body.immovable = true;
    },

    update: function () {
        // Codigo novo
        if (this.esquerda.isDown) this.palheta.body.velocity.x = -300;
        else if (this.direita.isDown) this.palheta.body.velocity.x = 300;
        else this.palheta.body.velocity.x = 0;
    },
};

var game = new Phaser.Game(400, 450);
game.state.add('main', mainState);
game.state.start('main');