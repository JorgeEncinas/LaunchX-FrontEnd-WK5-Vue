<template>
    <div class="actual-body">
        <div class="section1">
            <div class="section-title">
                <h2 id="menu-section"> Insumos Restantes </h2>
            </div>
            <div class="table-div">
                <BakerFlavors/>
                <br> <br> <br> <br>
                <BakerDeco />
            </div>
        </div>
        <div class="section2">
            <div class="section-title">
                <h2 id="contact-section">Órdenes</h2>
            </div>
            <div class="udet-div">
                <BakerOrders />
            </div>
        </div>
    </div>
</template>

<script>
import BakerFlavors from './BakerFlavors.vue'
import BakerDeco from './BakerDeco.vue'
import BakerOrders from './BakerOrders.vue'

export default {
  name: 'BakerInfoView',
  components: {
    BakerFlavors,
    BakerDeco,
    BakerOrders
  }
}
</script>

<style scoped>
.udet-div {
    padding: 20px 30px;
    background-color: white;
    width: auto;
    margin: 0;
}
</style>
