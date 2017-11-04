<template>
  <div class="hello">
  	<index-header />
  	<index-swiper />
  	<index-hotSeight />
  </div>
</template>
<script>
	import header from "./Header";
	import swiper from "./Swiper";
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
	  	"index-hotSeight": hotSeight
	  }
	  
	}
</script>
<style scoped>
</style>
