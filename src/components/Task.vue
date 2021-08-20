<template>
    <div>
        <input type="checkbox" v-model="task.done">
        <label :class="{done: task.done}">{{task.name}}</label>
        <button class="delete-btn" @click="$emit('handleDelete')">x</button>
    </div>
</template>

<script>
    export default {
        props: ['task']
    }
</script>

<style lang="postcss">
    .done {
        @apply line-through;
    }

    .delete-btn {
        @apply bg-red-600 text-white p-1;
    }
</style>

