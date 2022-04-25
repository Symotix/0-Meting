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
        <p>{{result}}</p>
        <p>{{this.$store.state.myToDos}}</p>
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
        },
        makeTable: function(tableData){
            var table = document.createElement('table');
            var tableBody = document.createElement('tbody');

            tableData.forEach(function(rowData) {
                var row = document.createElement('tr');

                rowData.forEach(function(cellData) {
                var cell = document.createElement('td');
                cell.appendChild(document.createTextNode(cellData));
                row.appendChild(cell);
                });

                tableBody.appendChild(row);
            });

            table.appendChild(tableBody);
            document.body.appendChild(table);
        }
    },
    computed: {
        giveToDos() {
            return this.$store.state.myToDos.todo;
        }
    }
}
</script>
<!--
Plan of attack:
- make button click function call 
- make function call API
- 

data comes in like this;
{ "todo": {
    "id": "8968d7ee-0c5e-4838-af7b-9a9cdc6d9184", 
    "assignee": "David", 
    "dueDateTime": "2022-04-30T16:00:00.000Z", 
    "description": "Levarne Organogram Graphic maken" 
    } 
}

example;
var list = ["abe", "bobbo", "chrisly"]
each item in list
    li = item
</template>
-->