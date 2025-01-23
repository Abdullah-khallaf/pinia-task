<template>
  <main>
    <header>Hello world from my task master</header>

    <button @click="filter = 'all-Tasks'">Show All Tasks</button>
    <button @click="filter = 'all-habits'">Show All Habits</button>
    <button @click="filter = 'checkedTasks'">Show Done Tasks</button>
    <button @click ="filter = 'checkedHabits'"> Show habits </button>

    <!-- Normal Tasks Viewer -->
    <div class="task_list" v-if="filter === 'all-Tasks'">
      <p>All Normal Tasks</p>
      <p>Tasks Counter {{ taskStore.allCount }}</p>
      <div class="taskList" v-for="task in taskStore.tasks" :key="task.id">
        <Task :task="task"></Task>
      </div>
    </div>

<hr>

    <!-- Normal Habits Viewer -->
    <div class="task_list" v-if="filter === 'all-habits'">
      <p>Normal Habits</p>
      <p>Habits Counter {{ habitStore.getHabitsCounter }} </p>
      <p>Habits Done Counter {{ habitStore.getHabitsDoneCounter }} </p>
      <div class="taskList" v-for="habit in habitStore.habits" :key="habit.id">
        <Habit :habit="habit"></Habit>
      </div>
    </div>

<hr>

    <!-- Checked Habits -->
    <div class="task_list" v-if="filter === 'checkedHabits'">
      <p>Checked Habits</p>
      <div class="taskList" v-for="habit in habitStore.getHabitsDone" :key="habit.id">
        <Habit :habit="habit"></Habit>
      </div>
    </div>

<hr>

    <!-- Checked Tasks -->
    <div class="task_list" v-if="filter === 'checkedTasks'">
      <p>Checked Tasks</p>
      <div class="taskList" v-for="task in taskStore.doneTasks" :key="task.id">
        <task :task="task"></task>
      </div>
    </div> 
  </main>

</template>

<script>
import { ref } from "vue";
import { useTaskStore} from "./stores/Tasks";
import { useHabitStore} from "./stores/Habits";
import Task from "./components/Task.vue";
import Habit from "./components/Habit.vue";

export default {
  components: {
    Task,
    Habit
  },
  setup() {
    const taskStore = useTaskStore();
    const habitStore = useHabitStore();

    const filter = ref("all");
    return { taskStore, habitStore, filter };
  },
};
</script>
