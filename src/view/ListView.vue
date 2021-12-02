<template>
  <div>
    <list-item></list-item>
  </div>
</template>
<script>
  import ListItem from "../components/ListItem";
  import ListMinin from "../mixin/ListMinin";

  export default {
    components: {
      ListItem,
    },
    mixins: [
      ListMinin,
    ]
  }
</script>

<style scoped>
</style>
