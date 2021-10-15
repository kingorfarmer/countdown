<template>
    <div>
        <span>{{ name }}</span>
        <button @click="updateProfile" class="bg-blue-600">Change name</button>
        <Task v-for="(task, index) in tasks" :key="index" :task="task" @handleDelete="$emit('onDeleteTask')"/>
    </div>
</template>

<script>
    import Task from './Task.vue'
    import { mapActions, mapGetters, mapMutations } from 'vuex'

    export default {
        props: ['tasks'],
        components: {
            Task
        },
        computed: {
            ...mapGetters(['name'])
        },
        methods: {
            ...mapMutations(['setName']),
            ...mapActions(['updateProfile'])
        }
    }
</script>