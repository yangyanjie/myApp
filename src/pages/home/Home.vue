<template>
  <div class="hello">
  	<index-header />
  	<index-swiper :swiperInfo="swiperInfo" />
	<index-listItem />
	<index-hotSeight :hotListInfo="hotListInfo"/>
	<index-triplist :tripListInfo="tripListInfo"/>
  
  </div>
</template>
<script>
	import header from "./components/Header"
	import swiper from "./components/Swiper"
	import triplist from "./components/TripList"
	import listItem from "./components/listItem"
	import hotSeight from "./components/HotSeight"
	import axios from "axios"
	import { AJAX_GET_DATA } from "./types.js"
	import { mapState,mapActions } from "vuex"
	export default {

		computed: mapState({
			swiperInfo: (state) => {
				return state.home.swiperInfo;
			},
			hotListInfo: (state) => {
				console.log(state.home.hotListInfo);
				return state.home.hotListInfo;
			},
			tripListInfo: (state) => {
				return state.home.tripListInfo;
			}
		}),

	  components:{
	  	"index-header":header,
	  	"index-swiper":swiper,
			"index-triplist":triplist,
	  	"index-listItem":listItem,
	  	"index-hotSeight": hotSeight
		},

		mounted() {
			!this.swiperInfo.length && this.getHomeData();
		},

		methods: mapActions({
			getHomeData: (dispatch)=> {
				dispatch(AJAX_GET_DATA);
			}
		})
	}
</script>
<style scoped>
	
</style>
