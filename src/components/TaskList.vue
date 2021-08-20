<template>
    <div>
        <Task v-for="(task, index) in tasks" :key="index" :task="task" @handleDelete="$emit('onDeleteTask')"/>
    </div>
</template>

<script>
    import Task from './Task.vue'

    export default {
        props: ['tasks'],
        components: {
            Task
        }
    }
</script>