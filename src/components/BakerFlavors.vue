<template>
    <h4 class="table-title">Sabores de Pastel Disponibles</h4>
    <table>
        <tr>
            <th>Sabor</th>
            <th>Ingredientes a notar</th>
            <th>Unidades Restantes</th>
        </tr>
        <tr v-for="item in flavors" v-bind:key="item">
            <td>{{item.flavor}}</td>
            <td>{{item.ingredients}}</td>
            <td>{{item.units_left}} {{item.unit}}</td>
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
