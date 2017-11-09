<template>
  <div class="activity">
      <activity-header />
      <activity-topic />
  </div>
</template>
<script>
  import activityHeader from "./components/Header"
  import activityTopic from "./components/Topic"
  export default {
    components: {
      "activity-header": activityHeader,
      "activity-topic": activityTopic
    }
  }

</script>
<style scoped>
	
</style>
