import axios from 'axios';
import { SET_DATA,AJAX_GET_DATA } from './types.js'; 
export default {
    state: {
        swiperInfo: [],
        hotListInfo: [],
        tripListInfo: [],
        iconSwiperInfo: []
    },
    mutations: {
        [SET_DATA](state,payload) {
           
            state.swiperInfo = payload.swiperInfo;
            state.hotListInfo = payload.hotListInfo;
            state.tripListInfo = payload.tripListInfo;
            state.iconSwiperInfo = payload.iconSwiper;
        }
    },
    actions: {
        [AJAX_GET_DATA](context) {
            axios.get("/static/home.json")
            .then((res) => {
                context.commit(SET_DATA, res.data.data);
            })
        }
    },
    getters: {
        iconSwiper(state) {
            const result = [];
            state.iconSwiperInfo.forEach((value, index) => {
                let page = Math.floor(index / 8);
                if(!result[page]) {
                    result[page] = [];
                }
                result[page].push(value);
            })
            return result;
        }
    }
  }