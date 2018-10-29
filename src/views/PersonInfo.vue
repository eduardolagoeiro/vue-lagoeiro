<template>
  <v-container grid-list-xl>
    <v-carousel
      height="300px"
      width="400px">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        cycle="false"
      ></v-carousel-item>
    </v-carousel>
    <h2>{{person.name}}, {{calculateAge()}}</h2>
    <v-layout justify-center align-center row wrap>
      <v-flex d-inline-flex xs6>
        <v-icon>favorite</v-icon>
        <p class="pa-0 ma-0">{{person.birthday | dateFilter}}</p>
      </v-flex>
      <v-flex d-inline-flex xs6>
        <v-icon>favorite_border</v-icon>
        <p class="pa-0 ma-0">{{person.birthday | dateFilter}}</p>
      </v-flex>
      <v-flex>
        <h3 class="pb-3">Sobre</h3>
        <p class="text-xs-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import placeholderImage from '../assets/placeholder_image.gif'
export default {
  data () {
    return {
      items: [
        { src: placeholderImage }, { src: placeholderImage }, { src: placeholderImage }, { src: placeholderImage }
      ]
    }
  },
  computed: {
    person () {
      return this.$store.state.person
    }
  },
  filters: {
    dateFilter (raw) {
      const date = new Date(raw)
      let day = date.getDate()
      if (day < 10) day = '0' + day
      let month = date.getMonth() + 1
      if (month < 10) month = '0' + month
      return `${day}/${month}/${date.getFullYear()}`
    }
  },
  methods: {
    calculateAge () {
      if (!this.person.birthday) return 'desconhecido'
      const diffms = Date.now() - (new Date(this.person.birthday)).getTime()
      return Math.abs((new Date(diffms)).getUTCFullYear() - 1970)
    }
  },
  mounted () {
    if (!this.person) throw new Error('person should not be null on person info')
  }
}
</script>
