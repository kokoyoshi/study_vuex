<template>
  <main class="mdl-layout__content">
    <div class="page-content">
      <card
        v-for="gifsId in favorites"
        :gif="gifsId"
        :key="gifsId">
      </card>
    </div>
  </main>
</template>
<script>
import { mapGetters } from 'vuex'
import Card from '../components/Card.vue'

export default {
  beforeRouteEnter (to, from, next) {
    next()
  },
  computed: {
    ...mapGetters(['favorites'])
  },
  components: {
    Card
  }
}
</script>
<style>
  main {
    width: 100%;
    margin: 0 auto;
  }
  .page-content {
    display: flex;
    flex-direction: column;
    padding-top: 60px;
  }
</style>