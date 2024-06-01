<script setup lang="ts">
import {all,find}  from '../apis/article'
const {response:articles}= await all();
const {response:article}= await find(1);
</script>

<template>
  <!-- <button @click="state =!state">switch</button>
  <div v-if="state">
    {{article.title}}
  </div> -->
  <!-- {{ response?.id }} -->
  <div v-for="article of articles" :key="article.id "></div>
</template>

../apis/article
