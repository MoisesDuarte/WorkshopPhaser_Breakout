var mainState = {
    preload: function () {
        game.load.image('palheta', 'assets/images/palheta.png');
        game.load.image('bloco0', 'assets/images/bloco1.png');
        game.load.image('bloco1', 'assets/images/bloco2.png');
        game.load.image('bloco2', 'assets/images/bloco3.png');
        game.load.image('bloco3', 'assets/images/bloco4.png');
        game.load.image('bloco4', 'assets/images/bloco5.png');
        game.load.image('bola', 'assets/images/bola.png');
    },

    create: function () {
        game.stage.backgroundColor = '#312e2f';
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.enableBody = true;

        this.esquerda = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.direita = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        this.palheta = game.add.sprite(200, 400, 'palheta'); // Codigo alterado
        this.palheta.body.immovable = true;
        this.palheta.body.collideWorldBounds = true; // Codigo alterado

        this.blocos = game.add.group();
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 5; j++) {
                var bloco = game.add.sprite(55 + i * 60, 55 + j * 35, 'bloco' + j);
                bloco.body.immovable = true;
                this.blocos.add(bloco);
            }
        }

        this.bola = game.add.sprite(192, 300, 'bola');
        this.bola.body.velocity.x = 200;
        this.bola.body.velocity.y = 200;
        this.bola.body.bounce.setTo(1);
        this.bola.body.collideWorldBounds = true;
    },

    update: function () {
        if (this.esquerda.isDown) this.palheta.body.velocity.x = -300;
        else if (this.direita.isDown) this.palheta.body.velocity.x = 300;
        else this.palheta.body.velocity.x = 0;

        // Codigo novo
        game.physics.arcade.collide(this.palheta, this.bola);
        game.physics.arcade.collide(this.bola, this.blocos, this.acertaBloco, null, this);
        if (this.bola.y > this.palheta.y) {
            game.state.start('main');
        }
    },

    // Codigo novo
    acertaBloco: function (bola, bloco) {
        bloco.kill();
    },
};

var game = new Phaser.Game(400, 450);
game.state.add('main', mainState);
game.state.start('main');