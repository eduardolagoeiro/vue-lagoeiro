<template>
  <div class="about">
    <v-autocomplete
      :loading="(!people && select) || personLoading"
      :items="people"
      :search-input.sync="search"
      @input="selectPerson"
      item-text="name"
      item-value="id"
      v-model="select"
      cache-items
      class="mx-3"
      label="Quem você está procurando?"
      no-data-text="Digite o nome de quem você procura"
    ></v-autocomplete>
    <Person v-if="select && person && person.id" :person="person"/>
  </div>
</template>

<script>
import Person from '../components/Person.vue'

export default {
  data () {
    return {
      select: null,
      search: null
    }
  },
  computed: {
    personLoading () {
      return this.$store.state.personLoading
    },
    person () {
      return this.$store.state.person
    },
    people () {
      return this.$store.state.people
    }
  },
  methods: {
    selectPerson (id) {
      this.$router.push({
        path: '/people',
        name: 'people',
        query: { id }
      })
    }
  },
  watch: {
    person (val) {
      this.select = val
    },
    search (val) {
      if (this.people && this.people.length > 0) return
      this.$store.dispatch('getPeopleName', {})
    }
  },
  mounted () {
    if (this.person) {
      this.select = this.person
    }
  },
  components: {
    Person
  }
}
</script>
