<template>
  <v-container grid-list-md>
    <v-layout row wrap justify-center align-center>
      <v-flex xs12 sm6 md5>
        <h1 primary class="pb-3 justify-center text-xs-center">Curiosidades</h1>
      </v-flex>
      <v-flex xs12 sm10 md8>
        <h2 class="justify-center text-xs-center">{{lorem.split(' ').slice(0, 2).join(' ')}}</h2>
        <p class="text-xs-justify">
          {{lorem}}
        </p>
      </v-flex>
      <v-flex xs12 sm10 md8>
        <h2 class="justify-center text-xs-center">{{lorem.split(' ').slice(0, 2).join(' ')}}</h2>
        <p class="text-xs-justify">
          {{lorem}}
        </p>
      </v-flex>
      <v-flex xs12 sm10 md8>
        <h2 class="justify-center text-xs-center">{{lorem.split(' ').slice(0, 2).join(' ')}}</h2>
        <p class="text-xs-justify">
          {{lorem}}
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import placeholderImage from '../assets/placeholder_image.gif'
export default {
  data () {
    return {
      placeholderImage,
      lorem: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    }
  }
}
</script>

<style>
  .text-xs-justify {
    text-indent: 2em;
  }
</style>
