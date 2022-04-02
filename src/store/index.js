import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [
      {
        id: 0,
        name: 'Jorge Encinas',
        phone: '555-55555',
        email: 'example@example.com',
        description: 'Quiero que el pastel tenga el meme del Heisenberg impactado',
        flavors: ['pistache', 'chocolate'],
        deco: ['brillo', 'pops']
      }
    ],
    order_id: 1,
    flavors: [
      {
        id: 1,
        flavor: 'Chocolate',
        ingredients: 'Incluye betún de chocolate encima',
        price: '$5.00',
        codename: 'chocolate',
        units_left: 23,
        unit: 'units'
      },
      {
        id: 2,
        flavor: 'Vainilla',
        ingredients: 'Incluye betún y adorno flor de vainilla',
        price: '$5.00',
        codename: 'vainilla',
        units_left: 49,
        unit: 'units'
      },
      {
        id: 3,
        flavor: 'Fresa',
        ingredients: 'Incluye fresas encima',
        price: '$10.00',
        codename: 'fresa',
        units_left: 18,
        unit: 'units'
      },
      {
        id: 4,
        flavor: 'Pistache',
        ingredients: 'Puede tener pedazos de pistache',
        price: '$15.00',
        codename: 'pistache',
        units_left: 3,
        unit: 'units'
      },
      {
        id: 5,
        flavor: 'Plátano',
        ingredients: 'Incluye plátano rebanado encima',
        price: '$10.00',
        codename: 'banana',
        units_left: 26,
        unit: 'units'
      }
    ],
    deco: [
      {
        id: 1,
        deco: 'Sombrillas',
        ingredients: 'El palillo es un popote de chocolate, la tela es chocolate amoldado',
        price: '$10.00',
        codename: 'sombrillas',
        units_left: 76,
        unit: 'units'
      },
      {
        id: 2,
        deco: 'Chocolate con Almendra',
        ingredients: 'Incluyen almendra, pedazos de maní por dentro',
        price: '$5.00',
        codename: 'almonds',
        units_left: 141,
        unit: 'units'
      },
      {
        id: 3,
        deco: 'Cortinas',
        ingredients: 'Betún de vainilla que adorna alrededor del pastel como una cortina',
        price: '$10.00',
        codename: 'cortinas',
        units_left: 9,
        unit: 'L'
      },
      {
        id: 4,
        deco: 'Brillo',
        ingredients: 'Brillo comestible',
        price: '$5.00',
        codename: 'brillo',
        units_left: 12,
        unit: 'kg'
      },
      {
        id: 5,
        deco: 'Pops',
        ingredients: 'Incluye cake pops con patrón de tigre de bengala, colocados sobre el pastel',
        price: '$15.00',
        codename: 'pops',
        units_left: 40,
        unit: 'units'
      }
    ]
  },
  getters: {
    getTasks (state) {
      return state.tasks
    },
    getId (state) {
      return state.order_id
    },
    getFlavors (state) {
      return state.flavors
    },
    getDeco (state) {
      return state.deco
    }
  },
  mutations: {
    postNewOrder (state, newListObject) {
      state.tasks.push(newListObject)
    },
    getId (state) {
      return state.id++
    }
  },
  actions: {
    postNewOrder ({ commit }, postData) {
      commit('postNewOrder', postData)
    }
  },
  modules: {
  }
})
