<template>
  <v-card>
    <v-card-title>Nutrition</v-card-title>
    <v-data-table class="mytable" :headers="headers" :items="desserts"></v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "Calories", value: "calories", width: "12%" },
        { text: "Fat (g)", value: "fat", width: "50%" },
        { text: "Carbs (g)", value: "carbs", width: "30%" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
div.mytable table tr:hover {
  background-color: #fff !important;
}


.mytable .v-table tbody tr:hover {
  background-color: #fff;
}
.mytable .v-table tbody td {
  background-color: red !important;
}

div.theme--light.v-data-table > div.v-data-table__wrapper > table > tbody > tr > td{
  // background-color: red;
    border-bottom: none !important;
}
</style>