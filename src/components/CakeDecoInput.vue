<template>
    <h4 class="order-instruction"> Elige tus adornos</h4><br>
    <div class="adornos">
        <div v-for="item in deco" v-bind:key="item" >
            <input type="checkbox" name="adorno" v-on:change="$emit('listChange', item.codename, checked)" v-bind:value=item.codename v-model="checked">
            <label>{{item.deco}}</label><br>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      deco: this.$store.getters.getDeco
      // checkedDeco: []
    }
  },
  emits: {
    listChange (item, addingBoolean) {
      return true // Validation skip!
    }
  }
}
</script>
