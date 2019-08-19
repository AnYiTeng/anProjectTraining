<template>
  <div>
    <router-view></router-view>
    <FootGuide v-show="$route.meta.showFooter"></FootGuide>
  </div>
</template>

<script>
import FootGuide from './components/FootGuide/FootGuide'
export default {
  components: {
    FootGuide
  }
}
</script>

<style>
</style>
