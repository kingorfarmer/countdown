<template>

    <div>
        <input type="text" v-model="newTask.name">
        <button class="form-button" @click="$emit('onAddTask')">Add Task</button>
    </div>

</template>

<script>
    export default {
        props: ['newTask'],
        data() {
            return {
                
            }
        },
    }
</script>

<style lang="postcss">
    .form-button {
        @apply bg-blue-600 text-white p-2.5;
    }
</style>
