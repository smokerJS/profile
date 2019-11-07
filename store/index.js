import Vuex from 'vuex';

const store = () => new Vuex.Store({
  state: { 
      gnbSwitch: false
    },
  mutations: {
    gnbSwitchHandler(state) {
      state.gnbSwitch = !state.gnbSwitch;
    }
  },
});

export default store;