<template>
    <div class="section2">
        <div class="section-title">
            <h2 id="orden-section">Ordena tu pastel</h2>
        </div>
        <form class="user-order" @submit.prevent="postData">
            <label for="descripcion">Descripción general del pastel</label> <br>
            <input type="textarea" id="descripcion" name="descripcion" v-model="description"> <br><br>
            <CakeFlavorInput @list-change="updateCheckedFlavors" />
            <CakeDecoInput @list-change="updateCheckedDeco"/>
            <h3 class="order-instruction">Ingresa tus datos para identificarte</h3>
            <label for="nombre">Nombre Completo</label> <br>
            <input type="text" id="nombre" name="nombre" v-model="name"> <br>
            <label for="telefono">Número de Teléfono (puede ser Celular)</label> <br>
            <input type="tel" id="telefono" name="telefono" maxlength="10" v-model="phone"> <br>
            <label for="correo">Correo Electrónico</label> <br>
            <input type="email" id="correo" name="correo" v-model="email"> <br> <br>
            <input type="submit" id="submit" v-on:click="postNewOrder" name="submit" value="Terminar">
        </form>
    </div>
</template>

<script>
import CakeFlavorInput from '@/components/CakeFlavorInput.vue'
import CakeDecoInput from '@/components/CakeDecoInput.vue'

export default {
  name: 'CakeInputView',
  components: {
    CakeFlavorInput,
    CakeDecoInput
  },
  data () {
    return {
      name: '',
      phone: '',
      email: '',
      description: '',
      checkedFlavors: [],
      checkedDeco: []
    }
  },
  methods: {
    postNewOrder (postData) {
      // var tempElmts = postData.target.elements
      console.log(CakeFlavorInput.checkedFlavors)
      var postDataObject = {
        id: this.$store.getId,
        description: this.description.toString(),
        name: this.name.toString(),
        phone: this.phone.toString(),
        email: this.email.toString(),
        flavors: this.checkedFlavors,
        deco: this.checkedDeco
      }
      this.$store.dispatch('postNewOrder', postDataObject)
    },
    updateCheckedFlavors (listItem, addingBoolean) {
      // console.log("I'm running!")
      if (addingBoolean) {
        this.checkedFlavors.push(listItem)
      } else {
        this.checkedFlavors.pop(listItem)
      }
    },
    updateCheckedDeco (listItem, addingBoolean) {
      if (addingBoolean) {
        this.checkedDeco.push(listItem)
      } else {
        this.checkedDeco.pop(listItem)
      }
    }
  }
}
</script>

<style scoped>
    form {
        width: auto;
        padding: 5%;
        background-color: white;
    }

    input {
        margin-bottom: 10px;
        margin-top: 5px;
    }

    input[type="checkbox"] {
        margin:  0px 10px 5px 50px;
    }

    input[type="submit"] {
        background-color: black;
        color: white;
        width: 20%;
        text-align: center;
        padding: 10px 5px;
        font-family: Helvetica, Arial, sans-serif;
        font-size:large;
        font-weight: bold;
        border-radius: 20px;
    }

    input[type="submit"]:hover {
        background-color: burlywood;
    }
</style>
