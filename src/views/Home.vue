<template>
  <v-container grid-list-md>
    <v-layout row wrap justify-center align-center>
      <v-flex d-block xs8 sm4 lg2>
        <v-img :src="familyIcon" contain></v-img>
      </v-flex>
      <v-flex d-block xs12>
        <h1 primary class="pb-3 justify-center text-xs-center">Bem-vindo ao site da Família lagoeiro</h1>
        <p class="text-xs-justify">{{lorem.substring(0, 100)}}</p>
      </v-flex>
      <v-flex d-block xs12>
        <div>
          <h2 class="justify-center text-xs-center">Pesquisa e Motivação</h2>
          <v-subheader class="justify-center">por:<i>Claudio Lagoeiro</i>
          </v-subheader>
        </div>
        <p class="text-xs-justify">
          {{lorem}}
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import placeholderImage from '../assets/placeholder_image.gif'
import familyIcon from '../assets/family-hope-cntr-icon.svg'
export default {
  data () {
    return {
      placeholderImage,
      familyIcon,
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
