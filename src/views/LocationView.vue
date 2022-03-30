<template>
    <div class="actual-body">
        <AboutLocation />
    </div>
    <Footer />
</template>

<script>
import AboutLocation from '@/components/AboutLocation.vue'
import Footer from '@/components/FooterComponent.vue'

export default {
  name: 'LocationView',
  components: {
    AboutLocation,
    Footer
  }
}
</script>
