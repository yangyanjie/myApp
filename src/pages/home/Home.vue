<template>
	<div class="hello">
	  	<index-header />
	  	<index-swiper :swiperInfo="swiperInfo" />
		<index-iconSwiper/>
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

		components:{
		  	"index-header":header,
		  	"index-swiper":swiper,
		  	"index-iconSwiper":iconSwiper,
			"index-triplist":triplist,
		  	"index-listItem":listItem,
			  "index-hotSeight": hotSeight,
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
<style>
	.hello{
		background:#f5f5f5;
	}

</style>
