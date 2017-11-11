<template>
  <div class="activity">
      <activity-header />
      <activity-topic />
  </div>
</template>
<script>
  import activityHeader from "./components/Header"
  import activityTopic from "./components/Topic"
  import { mapState,mapActions } from "vuex"
  export default {
    components: {
      "activity-header": activityHeader,
      "activity-topic": activityTopic
    },
    mounted() {
      this.getActivityData();
    },
    methods: mapActions({
      getActivityData: (dispatch) => {
        dispatch("getActivityData");
      }
    })
  }

</script>
<style scoped>
	
</style>
