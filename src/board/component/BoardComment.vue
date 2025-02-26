<script setup>

const props = defineProps({
    comment: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div style="display:flex">
        <div>
            {{ comment.writer }} : 
        </div>
        <div>
            {{ comment.content }}
        </div>
    </div>

</template>

<style scoped></style>