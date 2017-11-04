<template>
  <div class="hello">
  	<index-header />
  	<index-swiper />
  	<index-iconSwiper />
  	<index-listItem />
  	<index-triplist />

  </div>
</template>
<script>
	import header from "./Header";
	import swiper from "./Swiper";

	import triplist from "./TripList";
	


	import iconSwiper from "./IconSwiper";


	import listItem from "./listItem";


	export default {
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	  components:{
	  	"index-header":header,
	  	"index-swiper":swiper,

			"index-triplist":triplist


	  	"index-iconSwiper":iconSwiper,

	  	"index-listItem":listItem,


	  }
	  
	}
</script>

<style>
	.hello{
		background:#f5f5f5;
	}

</style>
