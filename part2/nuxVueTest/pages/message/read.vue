<template>
    <div>
        <MyNavigator/>
        <h1>All the messages in the state:</h1>
        <p v-text="this.$store.state.messages"></p>
    </div>
</template>

<script>

</script>