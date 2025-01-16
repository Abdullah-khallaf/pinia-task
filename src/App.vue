<template>
  <main>
    <header> Hello world from my task master</header>
    <div class="tasklist" v-for="task in taskStore.favs" :key="task.id">
      <Task :task="task"></Task>
    </div>
  </main>
</template>

<script>
import { useTaskStore } from './stores/Tasks';
import Task from './components/Task.vue'
export default {
  components: {
    Task
  },
  setup() {
    const taskStore = useTaskStore();
    return { taskStore };
  }
};


</script>
