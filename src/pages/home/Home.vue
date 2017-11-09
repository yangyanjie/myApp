<template>
  <div class="hello">
  	<index-header />
	<index-swiper :swiperInfo="swiperInfo" />
	<index-iconSwiper :iconSwiperA="iconSwiperA" :iconSwiperB="iconSwiperB" />
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
	import iconSwiper from "./components/IconSwiper"
	import axios from "axios"
	import { AJAX_GET_DATA } from "./types.js"
	import { mapState,mapActions } from "vuex"

	export default {
    	data () {
    	    return {
    	      msg: 'Welcome to Your Vue.js App',
    	      "iconSwiperA": [],
    	      "iconSwiperB": []
    	    }
		},
		
		components:{
			"index-header":header,
			"index-swiper":swiper,
			"index-iconSwiper":iconSwiper,
			"index-listItem":listItem,
			"index-hotSeight":hotSeight,
			"index-triplist":triplist
		},

		computed: mapState({
			swiperInfo: (state) => {
				return state.home.swiperInfo;
			},
			hotListInfo: (state) => {
				return state.home.hotListInfo;
			},
			tripListInfo: (state) => {
				return state.home.tripListInfo;
			},
			iconSwiperInfo: (state) => {
				return state.home.iconSwiperInfo;
			}
		}),

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
<style>
	.hello{
		background:#f5f5f5;
	}

</style>
