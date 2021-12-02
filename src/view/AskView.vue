<template>
    <div>
        <div v-for="item in fetchedAsk" v-bind:key="item.id">
            <a :href="item.url">
                {{ item.title }}
            </a>
            <small>
                {{ item.time_ago }} by
                <router-link v-bind:to="`/item/${item.id}`">{{ item.user }}</router-link>
            </small>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'fetchedAsk'
            ]),
        },
        created() {
            this.$store.dispatch("FETCH_ASK");
        }
    }
</script>
