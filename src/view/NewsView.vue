<template>
  <div>
    <div v-for="news in newses" v-bind:key="news.id">{{ news.title }}</div>
  </div>
</template>
<script>
  import { fetchNewsList } from "../api/index.js";

  export default {
    data() {
      return {
        newses: []
      }
    },
    created() {
      fetchNewsList()
              .then(response => this.newses = response.data)
              .catch();
    }
  }
</script>

<style>
</style>
