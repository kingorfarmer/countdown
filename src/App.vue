<template>
  <div id="app">
    <div>
      <AddTask @onAddTask="addTask" />
      <TaskList :tasks="tasks"/>
    </div>
  </div>
</template>

<script>
import AddTask from './components/AddTask.vue'
import TaskList from './components/TaskList.vue'

export default {
    data() {
        return {
            tasks: [],
            newTask: {name: '', done: false}
        }
    },
    components: {
        AddTask,
        TaskList
    },
    methods: {
        addTask(name) {
            this.tasks.push({name: name, done: false})
        }
    }
}
</script>

<style>

</style>
