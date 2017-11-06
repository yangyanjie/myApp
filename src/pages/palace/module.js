import axios from 'axios'
import { SET_DATA, AJAX_GET_DATA } from './types.js'

export default {
	state: {
		palaceData:[]
	},
	mutations: {
		[SET_DATA](state, payload){
			state.palaceData = payload;
 		}
	},
	actions: {
		[AJAX_GET_DATA](context){
			axios.get('/static/palace.json')
				.then((response)=>{
					context.commit(SET_DATA, response.data.data.palace)
				}) 
			}
	}
}