<template>
    <h4 class="order-instruction"> Elige tus sabores</h4>
    <div class="sabores">
        <div v-for="item in flavors" v-bind:key="item" >
            <input v-on:change="$emit('listChange', item.codename, checked)" type="checkbox" name="sabor" v-bind:value=item.codename v-model="checked">
            <label>{{item.flavor}}</label><br>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      flavors: this.$store.getters.getFlavors
      // checkedFlavors: []
    }
  },
  emits: {
    listChange (item, addingBoolean) {
      return true // Validation skip!
    }
  }
}
</script>
