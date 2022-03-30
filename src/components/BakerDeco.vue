<template>
    <h4 class="table-title">Adornos de Pastel disponibles</h4>
        <table>
            <tr>
                <th>Adorno</th>
                <th>Ingredientes a notar</th>
                <th>Unidades Restantes</th>
            </tr>
            <tr v-for="item in deco" v-bind:key="item">
                <td>{{item.deco}}</td>
                <td>{{item.ingredients}}</td>
                <td>{{item.units_left}} {{item.unit}}</td>
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
