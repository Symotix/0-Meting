<!-- Attempt at pug, had problems for no reason so first attempt in regular style
<template lang="pug">
    d
        MyNavigator
        //-
            1 tabel
            1 button, click => API-call returns todo-item in JSON-format, bij elke click nieuwe todo-item
                JSON heeft tijdsformaat, nejes displayen
                JSON geeft id, zorg dat je geen duplicates hebt
        h1 Here are all the todo-items:
        table(width:100%)
            tr Table version 1
                th ID:
                th Name of assignee:
                th Date and time:
                th Description
        button(v-on:click="callToDo") Get more data
        p {{result}}
        p {{score}}
</template>-->

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
            //this.makeTable(this.$store.state.myToDos);
        }
    },
    computed: {
        giveToDos() {
            return this.$store.state.myToDos.todo;
        }
    }
}
</script>