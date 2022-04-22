<template>
    <div>
        <div id="counterShower">
            <h1>My pretty counter</h1>
            <h2>Current Count is: {{message}}</h2>
            <button v-on:click="increaseCount">Add one</button>
        </div>
    </div>
    
</template>

<script>
    export default {
    data() {
            return {
                message: 1
            }
        },
        methods: {
            increaseCount: function() {
                this.message = this.message + 1
            }
        }
    }
</script>
