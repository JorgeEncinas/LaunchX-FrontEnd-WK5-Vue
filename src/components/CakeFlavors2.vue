<template>
    <h4 class="table-title">Sabores de Pastel Disponibles</h4>
    <table>
        <tr>
            <th>Sabor</th>
            <th>Ingredientes a notar</th>
            <th>Precio</th>
        </tr>
        <tr v-for="item in flavors" v-bind:key="item">
            <td>{{item.flavor}}</td>
            <td>{{item.ingredients}}</td>
            <td>{{item.price}}</td>
        </tr>
    </table>
</template>

<script>
export default {
  data () {
    return { flavors: this.$store.getters.getFlavors }
  }
}
</script>
