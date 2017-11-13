<template>
	<div>
		<palace-header />
		<palace-here :palaceData="palaceData" />
		<palace-wait   />
	</div>	
</template>
<script>
	import palaceheader from './components/PalaceHeader'
	import palacehere from './components/PalaceHere'
	import palacewait from './components/PalaceWait'
	import axios from 'axios'
	import { AJAX_GET_DATA } from './types.js'
	import { mapState, mapActions } from 'vuex'

	export default {

		components:{
		  	"palace-header":palaceheader,
		  	"palace-here":palacehere,
			"palace-wait":palacewait,
		},

		computed: mapState({
			palaceData:(state) => {
				console.log(state);
				return state.palace.palaceData
			}
		}),
		mounted(){
			 !this.palaceData.length && this.getPalaceData();
		},
		methods:mapActions({
			getPalaceData: (dispatch) => {
				dispatch(AJAX_GET_DATA)
			}
		})
	}
</script>

<style scoped>
	
</style>