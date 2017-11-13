<template>
	<div>
		<detail-ticket  :palaceDetail="palaceDetail"/>
	</div>	
</template>
<script>
	import detailticket from "./components/DetailTicket"
	import axios from 'axios'
	import { AJAX_SET_DETAIL } from './types.js'
	import { mapState, mapActions } from 'vuex'

	export default {
		
		components:{
			"detail-ticket": detailticket
		},
		computed: mapState({
			palaceDetail:(state) => {
				return state.palacedetail.palaceDetail
			}
		}),
		mounted(){
			 !this.palaceDetail.length && this.getPalaceDetail();
			  
		},
		methods:mapActions({
			getPalaceDetail: (dispatch) => {
				dispatch(AJAX_SET_DETAIL)
			},
			
		})

	}

		
</script>

<style scoped>
	
</style>