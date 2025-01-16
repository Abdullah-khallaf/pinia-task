<template>
    <div>
        <h3> {{task.title}}</h3>

    </div>  
</template>

<script setup>
defineProps({
    task: {
        type: Object,
        required: true,
    },
    
});

</script>