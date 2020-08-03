<template>
  <div>
      <table>
        <div class="header">
            <h1>{{ statusText }}</h1>
        </div>
        <div class="body">
            <tr v-for="i in 3" :key="i">
            <td v-for="j in 3" :key="j" @click="move(i, j)" :class="getButtonClass(i, j)">{{ game.board[getButtonNumber(i, j) - 1] }}</td>
        </tr>
        </div>
        <div class="footer">
            <h3>Extra stuff</h3>
        </div>
    </table>
  </div>
</template>

<script>
export default {
    name: 'Board',
    data() {
        return {
            statusText: 'One player missing',
        };
    },
    props: {
        game: Object,
    },
    methods: {
        move(i, j) {
            let clicker = this.getButtonNumber(i, j);

            const { Game } = this.$FeathersVuex.api;
            const game = new Game({
                ...this.game
            });

            game.board[clicker - 1] = 'X';

            game.update()
            .then((game) => {
                console.log(game);
            })
            .catch(() => {
                console.log('Something went wrong trying to make a move.')
            });
        },
        getButtonClass(i, j) {
            let buttonClass = "btn" + this.getButtonNumber(i, j);
            return buttonClass;
        },
        getButtonNumber(i ,j) {
            let number = null;

            switch (i) {
                case 1:
                    switch (j) {
                        case 1:
                            number = 1;
                            break;

                        case 2:
                            number = 2;
                            break;

                        case 3:
                            number = 3;
                            break;
                    }
                    break;

                case 2:
                    switch (j) {
                        case 1:
                            number = 4;
                            break;

                        case 2:
                            number = 5;
                            break;

                        case 3:
                            number = 6;
                            break;
                    }
                    break;

                case 3:
                    switch (j) {
                        case 1:
                            number = 7;
                            break;

                        case 2:
                            number = 8;
                            break;

                        case 3:
                            number = 9;
                            break;
                    }
                    break;
            }
            return number;
        },
    },
}
</script>

<style scoped>
.header {
    text-align: center;
}

.footer {
    text-align: center;
}

table {
    border-spacing: 0;
    border: 1px solid black;
    padding: 10px;
}

td {
    height: 100px;
    width: 100px;
    font-size: 3rem;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
}

td:hover {
    transition: background 0.2s ease-in-out;
    background: lightgrey;
}

td:active {
    transition: background 10ms;
    background: grey;
}

.btn1, .btn2, .btn4, .btn5, .btn7, .btn8 {
    border-right: 2px solid black;
}

.btn2, .btn3, .btn5, .btn6, .btn8, .btn9 {
    border-left: 2px solid black;
}

.btn4, .btn5, .btn6, .btn7, .btn8, .btn9 {
    border-top: 2px solid black;
}

.btn1, .btn2, .btn3, .btn4, .btn5, .btn6 {
    border-bottom: 2px solid black;
}
</style>