<template>
    <h4 class="table-title">Adornos de Pastel Disponibles</h4>
    <table>
        <tr>
            <th>Adorno</th>
            <th>Ingredientes a notar</th>
            <th>Precio</th>
        </tr>
        <tr v-for="item in deco" v-bind:key="item">
            <td>{{item.deco}}</td>
            <td>{{item.ingredients}}</td>
            <td>{{item.price}}</td>
        </tr>
    </table>
</template>

<script>
export default {
  data () {
    return { deco: this.$store.getters.getDeco }
  }
}
</script>
