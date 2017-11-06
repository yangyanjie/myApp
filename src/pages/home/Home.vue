<template>
  <div class="hello">
  	<index-header />
  	<index-swiper />
  	<index-iconSwiper :iconSwiperA="iconSwiperA" :iconSwiperB="iconSwiperB" />
  	<index-listItem />
  	<index-triplist />

  </div>
</template>
<script>
	import header from "./commponents/Header";
	import swiper from "./commponents/Swiper";
	import triplist from "./commponents/TripList";
	import iconSwiper from "./commponents/IconSwiper";
	import listItem from "./commponents/listItem";


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
    		"index-triplist":triplist,
    	  	"index-iconSwiper":iconSwiper,
    	  	"index-listItem":listItem,
	    },
	    methods:{
        	getIndexData: function() {
        		this.$axios("/static/data.json")
        			.then(this.handleDataSucc.bind(this))
        			.catch(this.handleDataErr.bind(this))
        	},

        	handleDataSucc: function(res) {
        		const response = res.data.data;
        		const iconSwiperDataA = response.iconSwiperA;
        		const iconSwiperDataB = response.iconSwiperB;
        		

        		this.iconSwiperA = iconSwiperDataA;
        		this.iconSwiperB = iconSwiperDataB;
        		
        	},

        	handleDataErr: function(err) {
        		console.log(err)
        	}
        },
        
        mounted: function() {
        	this.getIndexData()
        }
	  
	}
</script>

<style>
	.hello{
		background:#f5f5f5;
	}

</style>
