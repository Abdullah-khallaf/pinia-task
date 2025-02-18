<template>

  <section class="daily_wrapper">
    <taskForm></taskForm>
    <div class="buttons_wrapper">

      <button @click="filter = 'all-Tasks'">Show All Tasks</button>
      <button @click="filter = 'all-habits'">Show All Habits</button>
      <button @click="filter = 'checkedTasks'">Show Done Tasks</button>
      <button @click ="filter = 'checkedHabits'"> Show habits </button>

    </div>

  <div class="Task_list_container">
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
  </div>
  </section>
    
</template>

<script>
import { ref } from "vue";
import { useTaskStore} from "../stores/Tasks";
import { useHabitStore} from "../stores/Habits";
import Task from "../components/Task.vue";
import Habit from "../components/Habit.vue";
import taskForm from "../components/taskForm.vue";


export default {
  components: {
    Task,
    Habit,
    taskForm
  },
  setup() {
    const taskStore = useTaskStore();
    const habitStore = useHabitStore();

    const filter = ref("all");
    return { taskStore, habitStore, filter };
  },
};
</script>

<style scoped>
  .daily_wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button{
    outline: none;
    width: auto;
    height: 50px;
    background-color: beige;
    cursor: pointer;
    margin: 5px;
    padding: 10px;
  }

  button:hover{
    background-color:rgb(130, 130, 114);
  }
  .task_list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>