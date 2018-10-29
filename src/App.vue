<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer">
      </v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Família Lagoeiro</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat :to="{path:'/', name:'home'}">Home</v-btn>
        <v-btn flat :to="{path:'/people', name:'people'}">Pessoas</v-btn>
        <v-btn flat :to="{path:'/history', name:'history'}">História</v-btn>
        <v-btn flat :to="{path:'/curiosity', name:'curiosity'}">Curiosidades</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      fixed
      width = "300"
      id = "drawer"
    >
      <v-layout column align-center wrap justify-center>
        <v-btn class="v-btn-100" flat :to="{path:'/', name:'home'}">Home</v-btn>
        <v-btn class="v-btn-100" flat :to="{path:'/people', name:'people'}">Pessoas</v-btn>
        <v-btn class="v-btn-100" flat :to="{path:'/history', name:'history'}">História</v-btn>
        <v-btn class="v-btn-100" flat :to="{path:'/curiosity', name:'curiosity'}">Curiosidades</v-btn>
      </v-layout>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: null
    }
  }
}
</script>

<style>
  .v-btn-100 {
    width: 100%;
    padding: 2.5em 0;
    margin: 0;
    border-bottom: 1px solid lightgray;
  }
</style>
