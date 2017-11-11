import axios from 'axios'
import { LIST_GETDATA, LIST_SETDATA } from './types'

export default {
	state: {
		listData: {
			nav: [],
			list: []
		}
	},
	mutations: {
		[LIST_SETDATA](state, payload) {
			state.listData.nav = payload.listTit;
			state.listData.list = payload.list;
		}
	},
	actions: {
		[LIST_GETDATA](context) {
			axios.get('/static/data.json'
			  )
			  .then(function(res) {
			  		context.commit(LIST_SETDATA, res.data.data);
			  })	
		}
	},
	getters: {
		
	}
}

