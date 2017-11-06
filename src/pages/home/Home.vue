<template>
  <div class="hello">
  	<index-header />
  	<index-swiper v-bind:swiperInfo="swiperInfo" />
		<index-listItem />
		<index-hotSeight />
		<index-triplist />
  
  </div>
</template>
<script>
	import header from "./Header";
	import swiper from "./Swiper";
	import triplist from "./TripList";
	import listItem from "./listItem";
	import hotSeight from "./HotSeight";
	import axios from "axios"
	export default {
	  data () {
	    return {
	      swiperInfo: []
	    }
	  },
	  components:{
	  	"index-header":header,
	  	"index-swiper":swiper,
			"index-triplist":triplist,
	  	"index-listItem":listItem,
	  	"index-hotSeight": hotSeight
		},
		mounted() {
			this.getHomeData();
		},
		methods: {
			getHomeData() {
				axios.get("/static/home.json")
				.then(this.handleGetDataSucc.bind(this))
			},
			handleGetDataSucc(res){
					const data = res.data.data;
					this.swiperInfo = data.swiperInfo;
					console.log(this.swiperInfo)
			}
		},
		
	  
	}
</script>
<style scoped>
	
</style>
