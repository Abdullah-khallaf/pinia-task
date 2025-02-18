<template>
    <div class="habit-wrapper">
        <h3> Habit title: {{habit.title}}, and habit time is {{ habit.time }} </h3>
        <button> Check habit done</button>
        <button>remove from habits</button>
    </div>  
</template>

<script setup>
defineProps({
    habit: {
        type: Object,
        required: true,
    }
    
});

</script>

<style scoped>
    .habit-wrapper{
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 50px;
        background-color: #ffd5a3;
        margin-bottom: 20px;
    }
    button{
        height: 20px;
    }
</style>