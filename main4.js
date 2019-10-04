var mainState = {
    preload: function () {
        game.load.image('palheta', 'assets/images/palheta.png');
        // Codigo novo
        game.load.image('bloco1', 'assets/images/bloco1.png');
    },

    create: function () {
        game.stage.backgroundColor = '#312e2f';
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.enableBody = true;

        this.esquerda = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.direita = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        this.palheta = game.add.sprite(160, 400, 'palheta');
        this.palheta.body.immovable = true;

        // Codigo novo
        this.blocos = game.add.group();
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 5; j++) {
                var bloco = game.add.sprite(55+i*60, 55+j*35, 'bloco1');
                bloco.body.immovable = true;
                this.blocos.add(bloco);
            }
        }
    },

    update: function () {
        if (this.esquerda.isDown) this.palheta.body.velocity.x = -300;
        else if (this.direita.isDown) this.palheta.body.velocity.x = 300;
        else this.palheta.body.velocity.x = 0;
    },
};

var game = new Phaser.Game(400, 450);
game.state.add('main', mainState);
game.state.start('main');