import axios from 'axios'
import { SET_DETAIL, AJAX_SET_DETAIL } from './types.js'

export default {
	state: {
		palaceDetail:[],
	 
	},
	mutations: {
		[SET_DETAIL](state, payload){
			state.palaceDetail = payload.advise;
		}
	},
	actions: {
		[AJAX_SET_DETAIL](context){
			axios.get('/static/palacedetail.json')
				.then((response)=>{
					context.commit(SET_DETAIL,response.data.data)
					
				}) 
			}
	}

}