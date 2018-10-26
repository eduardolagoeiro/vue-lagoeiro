<template>
  <v-container grid-list-xl>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs6 sm3 lg2>
        <v-card>
          <v-img
            :src="person.father.photo"
          />
        </v-card>
      </v-flex>
      <v-flex xs6 sm3 lg2>
        <v-card>
          <v-img
            :src="person.father.photo"
          />
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12 sm6 lg4>
        <v-card>
          <v-img
            :src="person.father.photo"
          />
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap align-center justify-center fill-height>
      <v-flex xs5 sm2 lg1 v-for="(children, index) in person.child" :key="index">
        <v-card>
          <v-img
            :src="children.photo"
          />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['person']
}
</script>
