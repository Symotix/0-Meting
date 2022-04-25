<template>
    <div>
        <MyNavigator/>
        <h1>Here are all the todo-items</h1>
        <button v-on:click="callToDo" >Get more data</button>
        <CreateTable/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            result: ""
        }
    },
    methods: {
        // calls the getToDos-action
        callToDo: function() {
            this.$store.dispatch("getToDos");
        }
    },
    computed: {
        giveToDos() {
            return this.$store.state.myToDos.todo;
        }
    }
}
</script>