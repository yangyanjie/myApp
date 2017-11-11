<template>
	<div class="search">
		<search-header />
		<search-hot-search :search="searchInfo"/>
	</div>
</template>

<script>
	import searchInput from "./components/SearchInput";
	import hotSearch from "./components/HotSearch";
	import { mapState, mapActions, mapMutations } from "vuex"; 
	import { AJAX_GET_DATA} from "./types.js";
	import axios from "axios";
	
	export default {
		components: {
			"search-header": searchInput,
			"search-hot-search": hotSearch
		},
		
		computed: mapState({
			searchInfo: (state) => {
				return state.search
			} 
		}),
		
		mounted() {
			!this.searchInfo.length && this.getData();
		},
		
		methods: {
			getData: function(dispatch){
				 this.$store.dispatch(AJAX_GET_DATA);
			},
			change() {
				this.searchInfo = [];
			}
		}
	}
</script>

<style>
</style>