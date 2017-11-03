<template>
  <div class="hello">
  	<index-header />
  	<index-swiper />
  	<index-iconSwiper />
  </div>
</template>
<script>
	import header from "./Header";
	import swiper from "./Swiper";
	import iconSwiper from "./IconSwiper";

	export default {
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	  components:{
	  	"index-header":header,
	  	"index-swiper":swiper,
	  	"index-iconSwiper":iconSwiper
	  }
	  
	}
</script>
<style>
	.hello{
		background:#f5f5f5;
	}
</style>
