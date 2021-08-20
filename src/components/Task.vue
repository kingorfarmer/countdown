<template>
    <div>
        <input type="checkbox" v-model="task.done">
        <label :class="{done: task.done}">{{task.name}}</label>
    </div>
</template>

<script>
    export default {
        props: ['task']
    }
</script>

<style>
    .done {
        text-decoration: line-through;
    }
</style>