<template>
  <v-container grid-list-xl>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs6 sm3>
        <v-card>
          <v-img
            :src="person.father.photo"
          >
            <span class="headline">{{person.father.name}}</span>
          </v-img>
        </v-card>
      </v-flex>
      <v-flex xs6 sm3>
        <v-card>
            <v-img
              :src="person.mother.photo"
            >
              <span class="headline">{{person.mother.name}}</span>
            </v-img>
          </v-card>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center row >
      <v-flex xs8 sm4>
        <v-card>
          <v-img
            :src="person.photo"
          >
            <span class="headline">{{person.name}}</span>
          </v-img>
        </v-card>
      </v-flex>
      <v-flex xs4 sm2>
        <v-layout column style="overflow: scroll; max-height: 220px;">
          <v-flex v-for="(spouse, index) in person.spouses" :key="index">
            <v-card>
              <v-img
                :src="spouse.photo"
              >
                <span class="headline">{{spouse.name}}</span>
              </v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout row wrap align-center justify-center fill-height>
      <v-flex xs5 sm2 v-for="(children, index) in person.child" :key="index">
        <v-card>
          <v-img
              :src="children.photo"
            >
              <span class="headline">{{children.name}}</span>
            </v-img>
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
