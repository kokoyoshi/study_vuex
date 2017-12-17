<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <i class="material-icons">dehaze</i>
        <span class="mdl-layout-title">GIPHY-VUE</span>
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation -->
        <nav class="mdl-navigation">
          <router-link class="mdl-navigation__link" to="/">検索</router-link>
          <router-link class="mdl-navigation__link" to="/Favorite">お気に入り</router-link>
        </nav>
      </div>
    </header>
  </div>
</template>

<style scoped>
.mdl-layout__header-row {
  padding: 0 16px;
}
i {
  padding-right: 16px
}
</style>