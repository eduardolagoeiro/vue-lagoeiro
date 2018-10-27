<template>
  <div class="about">
    <v-autocomplete
      :loading="!people && select"
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
    <Person v-if="select" :person="person" />
  </div>
</template>

<script>
import Person from '../components/Person.vue'

export default {
  data () {
    return {
      id: this.$route.params.id,
      select: null,
      search: null
    }
  },
  computed: {
    person () {
      return this.$store.state.person
    },
    people () {
      return this.$store.state.people
    }
  },
  methods: {
    selectPerson (personId) {
      return this.$store.dispatch('getPerson', { id: personId })
    }
  },
  watch: {
    search (val) {
      if (this.people && this.people.length > 0) return
      this.$store.dispatch('getPeopleName', {})
    }
  },
  components: {
    Person
  }
}
</script>
