<script setup lang="ts">

import {ref,} from 'vue';

let res =  await fetch(`http://127.0.0.1:3002/articles/`).then(r=>r.json())
const article=ref<{title:string}>(res)

const state = ref(false);

</script>

<template>
  <button @click="state =!state">switch</button>
  <div v-if="state">
    {{article.title}}
  </div>
</template>


