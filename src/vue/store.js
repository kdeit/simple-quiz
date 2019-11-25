import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    strict: debug,
    state: {
        index: 0,
        answers: [false, false, false, false, false, false],
        finish: [false, false, false, false, false, false],
        game2: ''
    },
    getters: {
        index: state => {
            return state.index;
        },
        rightAnswers: state => {
            return state.answers.filter(i => i == true).length;
        },
        getAnswers: state => {
            return state.answers;
        },
        getFinish: state => {
            return state.finish;
        },
        answerCount: state => {
            return state.answers.length;
        },
        getGame: state => {
            return state.finish[0];
        },
        getGame2: state => {
            return state.game2;
        },
        getGameNext: state => {
            let res = 7;
            for (let i = 0; i < state.finish.length; i++) {
                if (!state.finish[i]) {
                    res = i + 1;
                    break;
                }
            }
            return res;
        },
    },
    mutations: {
        setIndex(state, payload) {
            state.index = payload;
        },
        addAnswer(state, payload) {
            state.answers.splice(payload.id, 1, payload.value)
        },
        //TODO:: add to action
        addFinish(state, payload) {
            state.finish.splice(payload.id, 1, payload.value)
        },
        addGame2(state, payload) {
            state.game2 = payload;
        }
    },
})