<template>
    <div>
        <MyNavigator/>
        <h1>Add here a message</h1>
        <input v-model="myInput">
        <button v-on:click="submitMessage">Submit message</button>
    </div>
</template>

<script>
    export default {
        data() {
                return {
                    myInput: ""
                }
            },
            methods: {
                submitMessage: function() {
                    this.$store.commit('addMessage', this.myInput)
                }
            }
    }
</script>