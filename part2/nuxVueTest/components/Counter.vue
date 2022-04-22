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
// on buttonclick function adds 1 to the default 0 of value in <h2>
    export default {
    data() {
            return {
                message: 0
            }
        },
        methods: {
            increaseCount: function() {
                this.message = this.message + 1
            }
        }
    }
</script>
