<template>
    <div class="task-container">
        <h3> {{task.title}}</h3>
        <button> Check the task</button>
        <button>add to habits</button>
        <button>remove from tasks</button>
    </div>  
</template>

<script setup>
defineProps({
    task: {
        type: Object,
        required: true,
    }
    
});

</script>
<style scoped>
    .task-container{
        display:flex;
        flex-direction: row;
        align-items: center;
    }
    button{
        height: 20px;
    }
</style>