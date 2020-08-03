<template>
    <div class="gameboard mx-auto">
        <v-container white grid-list-xs>
            <v-layout v-for="(gameboardRow, y) in gameboard" :key="gameboardRow.id">
                <Test2Cell
                    v-for="(symbol, x) in gameboardRow"
                    :key="symbol.id"
                    @click="onCellClicked(x, y)"
                >
                    {{ symbol ? symbol : '&nbsp;' }}
                </Test2Cell>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import Test2Cell from '@/components/Test2Cell.vue';

export default {
    name: 'Test2',
    components: {
        Test2Cell
    },
    data() {
        return {
            gameboard: [
                ['X', 'X', 'X'],
                ['X', 'X', 'X'],
                ['X', 'X', 'X'],
            ],
        };
    },
};
</script>