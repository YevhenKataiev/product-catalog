export const state = () => ({
  productsList: [
    {
      id: 0,
      name: 'product A',
      imgURL: 'url_1',
      price: 10,
      height: 10,
      width: 10,
      available: true
    },
    {
      id: 1,
      name: 'product A1',
      imgURL: 'url_2',
      price: 15,
      height: 20,
      width: 10,
      available: true
    },
    {
      id: 2,
      name: 'product B',
      imgURL: 'url_3',
      price: 10,
      height: 10,
      width: 20,
      available: false
    },
    {
      id: 3,
      name: 'product C',
      imgURL: 'url_3',
      price: 10,
      height: 10,
      width: 20,
      available: true
    }
  ]
})

export const getters = {
  // getProductsList: state => state.productsList,
  getProductById: state => (id) => {
    return state.productsList.find(elem => elem.id === id)
  }
  // vacanciesByKey: (state) => (key) => {
  //   return filter(state.vacanciesList[key.type], function(elem) {
  //     if (key.location === 'All') {
  //       return true;
  //     } else {
  //       return elem.location === key.location;
  //     }
  //   });
  // },
}

export const actions = {
  // async fetchVacanciesList({commit}) {
  //   const { data } = await axios.get('/api');
  //   commit('setVacanciesList', data.vacanciesList);
  //   commit('setVacanciesKeys', data.vacanciesKeys);
  // },
}

export const mutations = {
  // setVacanciesList(state, list) {
  //   state.vacanciesList = list;
  // },
  // setVacanciesKeys(state, keys) {
  //   state.vacanciesKeys = keys;
  // },
}
