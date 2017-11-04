<template>
  <div class="hello">
  	<index-header />
  	<index-swiper />
	<index-listItem />
	<index-triplist />
  </div>
</template>
<script>
	import header from "./Header";
	import swiper from "./Swiper";
	import triplist from "./TripList";
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
		"index-triplist":triplist,
	  	"index-listItem":listItem,
	  }
	  
	}
</script>
<style scoped>
	.hello{
		background:#ccc;
	}
</style>
