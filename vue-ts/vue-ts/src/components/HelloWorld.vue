<script setup lang="ts">
import { ref } from 'vue';
const data =await fetch('http://127.0.0.1:3002/posts/').then(r=>r.json())
const post = ref(data)
</script>

<template>
    {{ post }}
</template>

