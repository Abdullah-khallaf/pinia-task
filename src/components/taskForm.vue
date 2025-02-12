<!-- <template>
    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="New Task" v-model="newTask">
        <button>Add Task</button> 
        is Habit? <input type="checkbox" placeholder="Is habit?" v-model="isHabit">
    </form>
</template>

<script>
import { ref } from "vue";
import { useTaskStore} from "../stores/Tasks";
import { useHabitStore} from "../stores/Habits";
export default {
    setup () {
        const taskStore = useTaskStore()
        const habitStore = useHabitStore()
        const newTask = ref('')
        const isHabit = ref(false)

        const handleSubmit = () => {
            if (newTask.value.length > 0) {
                taskStore.addTask({
                    title: newTask.value,
                    isDone: false,
                    id: Math.floor(Math.random() * 10000)

                })
                if (isHabit.value === true){
                    const habitTime = prompt("Please add the habit time: ")

                    console.log("Habit Time:" + habitTime)
                    habitStore.addHabit({
                        title: newTask.value,
                        isDone: false,
                        time: habitTime,
                        id: Math.floor(Math.random() * 10000)
                    })  
                }
                newTask.value = ' '
                isHabit.value = false
            }
        }

        return {handleSubmit, newTask, isHabit}
    }
}
</script>

<style lang="scss" scoped>

</style> -->


<template>
    <form 
      @submit.prevent="handleSubmit"
      class="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4 w-full max-w-md mx-auto"
    >
      <!-- Title Input -->
      <input 
        type="text" 
        v-model="title" 
        placeholder="Enter title..." 
        class="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
  
      <!-- Type Selection (Task or Habit) -->
      <div class="flex gap-4">
        <label class="flex items-center gap-2">
          <input type="radio" v-model="type" value="task" class="hidden" />
          <span 
            :class="type === 'task' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'"
            class="px-4 py-2 rounded-lg cursor-pointer"
          >Task</span>
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" v-model="type" value="habit" class="hidden" />
          <span 
            :class="type === 'habit' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'"
            class="px-4 py-2 rounded-lg cursor-pointer"
          >Habit</span>
        </label>
      </div>
  
      <!-- Good/Bad Habit Toggle (Only if Habit is Selected) -->
      <div v-if="type === 'habit'" class="flex gap-4">
        <label class="flex items-center gap-2">
          <input type="radio" v-model="habitType" value="good" class="hidden" />
          <span 
            :class="habitType === 'good' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'"
            class="px-4 py-2 rounded-lg cursor-pointer"
          >Good Habit</span>
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" v-model="habitType" value="bad" class="hidden" />
          <span 
            :class="habitType === 'bad' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'"
            class="px-4 py-2 rounded-lg cursor-pointer"
          >Bad Habit</span>
        </label>
      </div>
  
      <!-- Date Selection (Optional) -->
      <input 
        type="date" 
        v-model="date" 
        class="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
  
      <!-- Submit Button -->
      <button 
        class="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {{ type === 'habit' ? 'Add Habit' : 'Add Task' }}
      </button>
    </form>
  </template>


<script setup>
import { ref } from 'vue';

const title = ref('');
const type = ref('task'); // Default to Task
const habitType = ref('good'); // Only applies if 'habit' is selected
const date = ref('');

const handleSubmit = () => {
  console.log({
    title: title.value,
    type: type.value,
    habitType: type.value === 'habit' ? habitType.value : null,
    date: date.value || 'No Date',
  });
};
</script>