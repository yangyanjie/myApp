<template>
	<div class="hello">
	  	<list-con :listData="listData"/>
	</div>
</template>
<script>
	import listCon from "./commponents/ListCon";
	import { LIST_GETDATA } from "./types"
	import { mapState, mapActions } from 'vuex'

	export default {
	    components:{
	  		"list-con":listCon
	    },
	    computed: mapState({
	    	listData: (state) => {
	    		return state.list.listData
	    	}
	    }),
	    mounted() {
	    	!this.listData.nav.length && this.getListData()
	    },
	    methods: mapActions({
	    	getListData: (dispatch) => {
	    		dispatch(LIST_GETDATA)
	    	}
	    })
	}
</script>

<style>

</style>

