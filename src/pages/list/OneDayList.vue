<template>
	<div class="hello">
	  	<list-con />
	</div>
</template>
<script>
	import listCon from "./commponents/ListCon";

	export default {
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	  components:{
	  	"list-con":listCon
	  }
	  
	}
</script>

<style>

</style>

