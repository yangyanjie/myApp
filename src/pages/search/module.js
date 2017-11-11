import axios from 'axios';
import { SET_DATA, AJAX_GET_DATA } from "./types.js";
export default {
	state: {
		hotSight: [],
		city: []
	},
	
	mutations: {
		[SET_DATA](state, payload) {
			state.hotSight = payload.hotSight;
			state.city = payload.city;
		}
	},
	
	actions: {
		[AJAX_GET_DATA](context) {
			axios.get("/static/cityAndSight.json")
			.then((res) => {
				context.commit(SET_DATA, res.data.data);
			})
		}
	},
	
	getters: {
		changeSight: function(state){
			/*console.log(this);
			var change = document.getElementById('changeSight');
			change.onclick = function(){
				state.hotSight.splice(0,8);
			}*/
		}
	}
}

/*[]里边填的是变量*/
