<template>
  <main class="mdl-layout__content">
    <div class="page-content">
      <search></search>
      <card
        v-for="id in gifsIds"
        :gifsId="id"
        :key="id">
      </card>
    </div>
  </main>
</template>

<script>
import Search from '../components/Search.vue'
import Card from '../components/Card.vue'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['gifsIds'])
  },
  components: {
    Search,
    Card
  }
}
</script>

<style>
  main {
    background-color: #f6f6f6;
    width: 100%;
    margin: 0 auto;
  }
  .page-content {
    display: flex;
    flex-direction: column;
  }
</style>