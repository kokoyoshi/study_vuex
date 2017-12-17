<template>
  <div class="gif mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand">
      <img :src="src" alt="" />
    </div>
    <div class="mdl-card__actions">
      <span class="filename">{{gifsId}}</span>
      <i class="material-icons" :class="[hasBothId(favorites, gifsId) ? 'color-red' : '']" @click="clickFavorite(gifsId, $event)">favorite</i>
    </div>
  </div>
</template>
<script>
import Util from '../util/Util'
import { mapActions, mapGetters } from 'vuex'
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../store/mutation-types'

export default {
  props: {
    gifsId: String
  },
  data: function () {
    return {
      src: `https://media2.giphy.com/media/${this.gifsId}/200.gif`
    }
  },
  computed: {
    ...mapGetters(['favorites'])
  },
  methods: {
    clickFavorite (gif, $event) {
      if (!this.hasBothId(this.favorites, gif)) {
        this.ADD_FAVORITE(gif)
      } else {
        this.REMOVE_FAVORITE(gif)
      }
    },
    hasBothId: Util.hasBothId,
    ...mapActions([
      ADD_FAVORITE,
      REMOVE_FAVORITE
    ])
  }
}
</script>
<style scoped>
.gif {
  margin: 0 auto;
  width: 60%;
  display: flex;
  justify-content:space-between;
  margin-bottom: 60px;
}
.gif.mdl-card {
  width: 256px;
  height: 256px;
}
.gif > .mdl-card__actions {
  position: relative;
  height: 52px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
}
.gif > .mdl-card__title img {
  width: 100%;
}
.filename {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}
.color-red {
  color: red;
}
.material-icons {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
</style>