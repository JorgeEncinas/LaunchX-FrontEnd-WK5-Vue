<template>
  <div class="actual-body">
    <BakerInfo />
  </div>
  <div class="color-space"><br><br><br><br></div>
  <Footer />
</template>

<style>
</style>

<script>
// @ is an alias to /src
import BakerInfo from '@/components/BakerInfo.vue'
import Footer from '@/components/FooterComponent.vue'

export default {
  name: 'CakeInfoView',
  components: {
    BakerInfo,
    Footer
  }
}
</script>
