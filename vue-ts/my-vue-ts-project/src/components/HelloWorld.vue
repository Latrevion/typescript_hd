<script setup lang="ts">

// let res =  await fetch(`http://127.0.0.1:3002/articles/`).then(r=>r.json())
// const article=ref<{title:string}>(res)

// const state = ref(false);
import useApi from '../composables/useApi'

const {response}= await useApi(`http://127.0.0.1:3002/articles/`);

</script>

<template>
  <!-- <button @click="state =!state">switch</button>
  <div v-if="state">
    {{article.title}}
  </div> -->
  {{ response }}
</template>


