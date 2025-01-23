<template>
    <div>
        <h3> Habit title: {{habit.title}}, and habit time is {{ habit.time }} </h3>
        
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