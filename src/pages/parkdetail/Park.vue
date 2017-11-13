<template>
	<div id="park">
        <park-header :scrollValue="scrollValue"/>
        <div class="mp-main">
            <header-figure />
            <base-info />
            <park-comment />
            <park-list />
        </div>
    </div>
</template>
<script>
    import parkHeader from "./components/Header"
    import headerFigure from "./components/Figure"
    import baseInfo from "./components/Base"
    import ParkComment from "./components/ParkComment"
    import ParkList from "./components/ParkList"
    import axios from "axios"
	import { mapState,mapActions } from "vuex"
    
    export default {
        data() {
            return {
                scrollValue: 0
            }
        },
        components: {
            "park-header": parkHeader,
            "header-figure": headerFigure,
            "base-info":baseInfo,
            "park-comment":ParkComment,
            "park-list":ParkList
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll)
        },
        methods: {
            handleScroll: function (){
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                this.scrollValue = scrollTop;
            }
        }
    }
</script>
<style scoped>
    #park {
        background: #f5f5f5;
    }
    .slide-fade-enter-active {
        transition: all 1s ease;
    }
    .slide-fade-leave-active {
        transition: all 1s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to{
        
        opacity: 0;
    }
</style>
