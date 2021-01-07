export const state = () => ({
  users: []
});

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  }
};

export const actions = {
  async fetchData(context) {
    const users = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/users"
    );
    // console.log('context+++++++= in vuex', context)
    context.commit("setUsers", users);
  }
};

export const getters = {
  usersGetter: state => state.users
};
