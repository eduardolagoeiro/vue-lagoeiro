<template>
  <div class="about">
    <v-autocomplete
      :loading="loading"
      :items="people"
      :search-input.sync="search"
      item-text="name"
      item-value="id"
      v-model="select"
      cache-items
      class="mx-3"
      label="Quem você está procurando?"
      no-data-text="Digite o nome de quem você procura"
    ></v-autocomplete>
    <h1 v-show="select">People {{select}}</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      id: this.$route.params.id,
      loading: false,
      select: null,
      search: null,
      people: []
    }
  },
  watch: {
    search (val) {
      if (this.people.length > 0) return
      if (this.loading) return
      this.loading = true
      return axios.get('http://www.mocky.io/v2/5bd355103400006236cfe127')
        .then(res => {
          this.people = res.data
        })
        .catch(err => console.log(err))
        .finally(() => (this.loading = false))
    }
  }
}
</script>
