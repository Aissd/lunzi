import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        curIdx: 0
    },
    mutations: {
        setCurIdx(state, payload) {
            console.log(payload);
            const { curIdx } = payload;
            state.curIdx = curIdx;
        }
    },
    getters: {
        getCurrentIndex(state) {
            return `现在点击索引为${state.curIdx}的tab`;
        }
    },
    actions: {
        fetchData(ctx, payload) {
            console.log(ctx, payload);
            let { page, count, type } = payload;
            console.log(new Vue());
            new Vue().request.get('/douban/j/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0')
        }
    }
});