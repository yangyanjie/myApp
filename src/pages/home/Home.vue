<template>
  <div class="hello">
  	<index-header />
  	<index-swiper />
  </div>
</template>
<script>
	import header from "./Header";
	import swiper from "./Swiper";
	export default {
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	  components:{
	  	"index-header":header,
	  	"index-swiper":swiper
	  }
	  
	}
</script>
<style scoped>
</style>
