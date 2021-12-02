<template>
  <div>
    <ul class="post-list">
      <li v-for="item in listItems" v-bind:key="item.id" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <p class="post-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link v-bind:to="`item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link
                v-if="item.user"
                v-bind:to="`/user/${item.user}`" class="router-link">
              {{ item.user }}
            </router-link>
            <a :href="item.url" v-else>
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      listItems() {
        return this.$store.state.list;
      }
    }
  }
</script>

<style scoped>
  .post-list {
    margin: 0px;
    padding: 0px;
  }
  .post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .points {
    margin: 20px;
    width: 80;
    height: 60;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
  }
  .post-title {
    margin: 0;
  }
  .link-text {
    color: #828282;
  }
  .router-link {
    color: #828282;
  }
</style>