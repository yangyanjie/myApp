import axios from 'axios'
import { SET_DATA, AJAX_GET_DATA } from './types.js'

export default {
	state: {
		palaceData:[],
		palaceWait:[],
		palaceHot:[],
		palacePlay:[]
	},
	mutations: {
		[SET_DATA](state, payload){
			 //console.log(payload)
			state.palaceData = payload.palace,
			state.palaceWait = payload.wait,
			state.palaceHot = payload.hot,
			state.palacePlay = payload.play
		}
	},
	actions: {
		[AJAX_GET_DATA](context){
			axios.get('/static/palace.json')
				.then((response)=>{
					context.commit(SET_DATA,response.data.data)
					//console.log(response.data.data)
				}) 
			}
	}
}