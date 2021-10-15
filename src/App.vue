<template>
    <div id="app">
            <div>
                <AddTask @onAddTask="addTask" :newTask="newTask"/>
                <TaskList @onDeleteTask="deleteTask" :tasks="tasks"/>
                <DemoSlot />
            </div>
    </div>
</template>

<script>

import AddTask from "./components/AddTask.vue";
import TaskList from "./components/TaskList.vue";
import DemoSlot from "./components/DemoSlots.vue";

export default {
  data() {
    return {
        tasks: [],
        newTask: { name: "", done: false },
    };
  },
  components: {
    AddTask,
    TaskList,
    DemoSlot
  },
  methods: {
    addTask(name) {
        name = this.newTask.name;
        this.tasks.push({ name: name, done: false });
        this.newTask.name = "";
    },
    deleteTask: function(tasks, index) {
        tasks = this.tasks;
        tasks.splice(index, 1)
    }
  },
};
</script>

<style></style>
