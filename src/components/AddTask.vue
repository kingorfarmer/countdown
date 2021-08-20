<template>

    <div>
        <input type="text" v-model="name">
        <button @click="$emit('onAddTask')">Add Task</button>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                name: ''
            }
        }
    }
</script>

<style>

</style>