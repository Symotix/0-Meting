<!--
- 3 input velden
- submit button
    - click => VueX action sends /echo/ 
- create action in vueX store
- extra mutatie
    - /setEchoResponse/ saved the response in API call
- show resultaat API call from store
-->
<template>
    <div>
        <MyNavigator/>
        <h1>My very own form:</h1>
        <input v-model="myInput1">
        <input v-model="myInput2">
        <input v-model="myInput3">
        <button v-on:click="submitForm">Submit form</button>
        <p v-text="this.$store.state.echoResponse"></p>
    </div>
</template>

<script>
    export default {
        data() {
                return {
                    myInput1: "",
                    myInput2: "",
                    myInput3: "",
                    formData: ""
                }
            },
            methods: {
                // combines the 3 different inputs into 1 string
                combineFormData: function() {
                    let formData = String(this.myInput1 + this.myInput2 + this.myInput3)
                    return formData
                },
                // calls the echo-action and gives along the form data
                submitForm: function() {
                    this.$store.dispatch("echo", this.combineFormData());
                }
            }
    }
</script>