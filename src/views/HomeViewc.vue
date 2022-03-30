<template>
  <div class="actual-body">
    <CakeInfo />
    <div class="color-space"><br><br><br><br></div>
    <CakeInput />
  </div>
  <Footer />
</template>

<style>
</style>

<script>
// @ is an alias to /src
import CakeInfo from '@/components/CakeInfo.vue'
import Footer from '@/components/FooterComponent.vue'
import CakeInput from '@/components/CakeInput.vue'

export default {
  name: 'CakeInfoView',
  components: {
    CakeInfo,
    CakeInput,
    Footer
  }
}
</script>
