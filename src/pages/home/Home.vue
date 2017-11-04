<template>
  <div class="hello">
  	<index-header />
  	<index-swiper />
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
	import hotSeight from "./HotSeight"
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
	  	"index-hotSeight": hotSeight
	  }
	  
	}
</script>
<style scoped>
	
</style>
