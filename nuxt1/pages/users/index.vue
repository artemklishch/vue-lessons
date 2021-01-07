<template>
  <section>
    <h1>{{ pageTitle }}</h1>
    <ul>
      <li v-for="user of users" :key="user.id">
        <a href="#" @click.prevent="openUser(user)">{{ user.name }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  // async asyncData({ $axios }) {
  //   // this здесь нет
  //   // это не используется с Vuex, с Vuex используется метод fetch? что описан ниже
  //   // это встроенный накст метод для формирования данных на сервере
  //   // при этом при обычном переходе на вкладку с этой компонентой также происходит запрос на сервер
  //   // как при одностраничном приложении
  //   const users = await $axios.$get(
  //     "https://jsonplaceholder.typicode.com/users"
  //   );
  //   return { users }; // эта переменная подставляется в разметку, к ней есть доступ в компоненте через this
  // },
  async fetch(context) {
    // console.log("context in fetch", context);
    if (context.store.getters["users/usersGetter"].length === 0) {
      await context.store.dispatch("users/fetchData"); 
      // если файл хранилища называется index.js, 
      // нет необходимости писать "users/fetchData" и ["users/fetchData"],
      // а можно сразу писать название геттера
    }
  },
  computed: {
    users() {
      return this.$store.getters["users/usersGetter"];
    },
  },
  data() {
    return {
      pageTitle: "Users Page",
    };
  },
  created() {
    // console.log("--------", this.users);
  },
  // async mounted() {
  //   this.users = await this.$axios.$get(
  //     "https://jsonplaceholder.typicode.com/users"
  //   );
  //   console.log(this.users)
  // },
  methods: {
    openUser(user) {
      this.$router.push("/users/" + user.id);
    },
  },
};
</script>