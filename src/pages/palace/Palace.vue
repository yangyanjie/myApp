<template>
	<div>
		<palace-header />
		<palace-here :palaceData="palaceData" />
		<palace-wait   />
		<!-- <palace-package :palaceWait="palaceWait" /> :palaceHot="palaceHot"-->
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
			// "palace-package":palacepackage
		},

		computed: mapState({
			palaceData:(state) => (
				//console.log(state.palace.palaceData),
				state.palace.palaceData
			)
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