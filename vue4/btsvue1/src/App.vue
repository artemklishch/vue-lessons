<template>
  <v-container>
    <v-row>
      <v-col>
        <!-- <HelloWorld /> -->
        <Table />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import Table from "./components/Table";

export default {
  name: "App",

  components: {
    // HelloWorld,
    Table,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
body{
  background-color: darkgrey;
}
</style>