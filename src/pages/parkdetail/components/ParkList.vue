<template>
	<div class="mp-ticket-container">
        <park-promote />
        <ticket-item />
    </div>
</template>
<script>
    import ParkPromote from "./ParkPromote" 
    import TicketItem from "./TicketItem"
    export default {
        components: {
            "park-promote": ParkPromote,
            "ticket-item": TicketItem
        }
    }
</script>
<style scoped>
    .mp-ticket-container {
        position: relative;
        background:#fff;
    }
</style>
