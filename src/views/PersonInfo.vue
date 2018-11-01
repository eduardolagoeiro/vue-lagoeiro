<template>
  <v-container grid-list-xl>
    <v-layout justify-center align-center row wrap>
      <v-flex xs12 sm6 lg5>
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
      </v-flex>
      <v-flex xs12 sm4 lg3>
        <v-flex d-block xs12 class="text-sm-center">
          <h2>{{person.name}}, {{calculateAge()}} anos</h2>
        </v-flex>
        <v-layout row wrap justify-center>
          <v-flex d-inline-flex xs6 sm10 class="text-xs-center text-sm-right align-center">
            <div class="pr-1">
              <v-icon medium>fa-birthday-cake</v-icon>
            </div>
            <div class="text-xs-left">{{person.birthday | dateFilter}}</div>
          </v-flex>
          <v-flex d-inline-flex xs6 sm10 class="text-xs-center text-sm-right align-center">
            <div class="pr-1">
              <v-icon medium>fa-heart</v-icon>
            </div>
            <div class="text-xs-left">{{person.birthday | dateFilter}}</div>
          </v-flex>
          <v-flex d-inline-flex xs6 sm10 class="text-xs-center text-sm-right align-center">
            <div class="pr-1">
              <v-icon medium>fa-child</v-icon>
            </div>
            <div class="text-xs-left">{{child.length}}
              <span class="hidden-sm-and-down"> filhos</span>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm10 lg8>
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
    },
    child () {
      if (!this.person) return []
      if (this.person.sex) return this.person.fatherChild
      return this.person.motherChild
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
