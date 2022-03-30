<template>
    <div class="orders-container">
        <div class="order-item" v-for="item in orders" v-bind:key="item.id">
            <div class="upper-segment">
                <h2>Orden Número: {{item.id}}</h2> <br>
            </div>
            <div class="middle-segment">
                <h4>Nombre: {{item.name}}</h4>
                <h4>Teléfono: {{item.phone}}</h4>
                <h4>Correo: {{item.email}}</h4>
                <h4>Descripción General: </h4>
                <h5>{{item.description}}</h5>
            </div>
            <div class="lower-segment">
                <h4>Sabores: </h4>
                <div class="mult-order" v-for="flavor in item.flavors" v-bind:key="flavor">
                    <h5>{{flavor}}</h5>
                </div>
                <div class="clearfix"></div>
                <h4>Decoración: </h4>
                <div class="mult-order" v-for="deco in item.deco" v-bind:key="deco">
                    <h5>{{deco}}</h5>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return { orders: this.$store.getters.getTasks }
  }
}
</script>

<style scoped>
.orders-container {
    height: 100%;
    width: 100%;
}

.order-item {
    height: auto;
    width: 80%;
    border: 1px solid black;
    padding: 5px;
    margin: 15px auto;
}

.upper-segment {
    width: 100%;
    height: 32%;
}

.middle-segment {
    width: 100%;
    height: 32%;
}

.middle-segment h5 {
    width: 80%;
    margin-left: 20px;
}

.lower-segment {
    width: 100%;
    height: 32%;
}

.mult-order h5, .lower-segment h4 {
    float: left;
    margin: 10px;
}
</style>
