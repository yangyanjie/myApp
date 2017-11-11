import axios from 'axios';

export default {
    state: {
       daytrip:[],
       queueFree: {},
       hotList: {},
       historicalSites: {},
       natureSight: {},
       dayTripInfo: {}
    },
    mutations: {
        setActivityData(state, payload) {
            state.daytrip = payload.daytrip;
            state.queueFree = payload.queueFree;
            state.hotList = payload.hotRecomInfo;
            state.historicalSites = payload.historicalSites;
            state.natureSight = payload.natureSight;
            state.dayTripInfo = payload.dayTripInfo;

        } 
    },
    actions: {
        getActivityData(context) {
            axios.get("/static/activity.json")
            .then((res) => {
                context.commit("setActivityData", res.data.data);
            })
        }
    },
    getters: {
        
    }
  }