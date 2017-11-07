import axios from 'axios';
import { SET_DATA,AJAX_GET_DATA } from './types.js'; 
export default {
    state: {
        swiperInfo: [],
        hotListInfo: [],
        tripListInfo: [],
        iconSwiperInfoA: [],
        iconSwiperInfoB: []
    },
    mutations: {
        [SET_DATA](state,payload) {
           
            state.swiperInfo = payload.swiperInfo;
            state.hotListInfo = payload.hotListInfo;
            state.tripListInfo = payload.tripListInfo;
            state.iconSwiperInfoA = payload.iconSwiperA;
            state.iconSwiperInfoB = payload.iconSwiperB;
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
        
    }
  }