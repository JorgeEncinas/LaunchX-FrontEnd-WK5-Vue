<template>
    <div class="section1">
        <h1 class="welcome">Bienvenue!</h1>
        <div class="section-title">
            <h2 id="menu-section"> Menú </h2>
        </div>
        <div class="table-div">
            <CakeFlavors2 />
            <br> <br> <br>
            <CakeDeco2 />
        </div>
    </div>
</template>

<script>
import CakeFlavors2 from './CakeFlavors2.vue'
import CakeDeco2 from './CakeDeco2.vue'

export default {
  name: 'CakeInfoDetail',
  components: {
    CakeFlavors2,
    CakeDeco2
  }
}
</script>
