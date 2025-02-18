<template>
    <div class="task-container">
        <h3> {{task.title}}</h3>
        <button> Check the task</button>
        <button>add to habits</button>
        <button @click= "deleteTask">remove from tasks</button>
    </div>  
</template>

<script setup>
const props = defineProps({
    task: {
        type: Object,
        required: true,
    }
    
});

import { useTaskStore} from "../stores/Tasks";

const taskStore = useTaskStore()
const deleteTask = ()  => {
    taskStore.removeTask(props.task.id)
}
</script>
<style scoped>
    .task-container{
        display:flex;
        flex-direction: row;
        align-items: center;
        height: 50px;
        background-color: #ffd5a3;
        margin-bottom: 20px;
    }
    button{
        height: 50px;
        width: auto;
        padding: 10px;
        outline: none;
        cursor: pointer;
        background-color: antiquewhite;
        text-align: center;
        margin: 0 10px;

    }
</style>