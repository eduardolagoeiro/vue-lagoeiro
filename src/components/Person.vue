<template>
  <v-container grid-list-xl>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs6 sm3>
        <v-card>
          <v-img @click="changePeople(person.fatherId)" v-if="!isLoading && person && person.father && person.father.photo"
            :src="person.father.photo"
          >
            <span class="headline">{{person.father.name}}</span>
          </v-img>
          <v-img @click="changePeople(person.fatherId)" v-else-if="!isLoading && person && person.father"
            :src="placeholderImage"
          >
            <span class="headline">{{person.father.name}}</span>
          </v-img>
          <v-img v-else
            :src="placeholderImage"
          />

        </v-card>
      </v-flex>
      <v-flex xs6 sm3>
        <v-card>
            <v-img @click="changePeople(person.motherId)" v-if="!isLoading && person && person.mother && person.mother.photo"
              :src="person.mother.photo"
            >
              <span class="headline">{{person.mother.name}}</span>
            </v-img>
            <v-img @click="changePeople(person.motherId)" v-else-if="!isLoading && person && person.mother"
              :src="placeholderImage"
            >
              <span class="headline">{{person.mother.name}}</span>
            </v-img>
            <v-img v-else
            :src="placeholderImage"
          />
          </v-card>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center row >
      <v-flex xs8 sm4>
        <v-card>
          <v-img @click="expandPerson(person.id)" v-if="!isLoading && person && person.photo"
            :src="person.photo"
          >
            <span class="headline">{{person.name}}</span>
          </v-img>
          <v-img @click="expandPerson(person.id)" v-else-if="!isLoading && person"
            :src="placeholderImage"
          >
            <span class="headline">{{person.name}}</span>
          </v-img>
          <v-img v-else
            :src="placeholderImage"
          />

        </v-card>
      </v-flex>
      <v-flex xs4 sm2 v-if="spouses.length > 0">
        <v-layout column style="overflow: scroll; max-height: 220px;">
          <v-flex v-for="(spouse, index) in spouses" :key="index">
            <v-card>
              <v-img @click="changePeople(spouse.id)" v-if="!isLoading && spouse && spouse.photo"
                :src="spouse.photo"
              >
                <span class="headline">{{spouse.name}}</span>
              </v-img>
              <v-img @click="changePeople(spouse.id)" v-else-if="!isLoading && spouse"
                :src="placeholderImage"
              >
                <span class="headline">{{spouse.name}}</span>
              </v-img>
              <v-img v-else
                :src="placeholderImage"
              />
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout row wrap align-center justify-center fill-height>
      <v-flex xs5 sm2 v-for="(children, index) in child" :key="index">
        <v-card>
          <v-img @click="changePeople(children.id)" v-if="!isLoading && children && children.photo"
              :src="children.photo"
          >
            <span class="headline">{{children.name}}</span>
          </v-img>
          <v-img @click="changePeople(children.id)" v-else-if="!isLoading && children"
              :src="placeholderImage"
          >
            <span class="headline">{{children.name}}</span>
          </v-img>
          <v-img v-else
            :src="placeholderImage"
          />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import placeholderImage from '../assets/placeholder_image.gif'
export default {
  data () {
    return {
      placeholderImage
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.personLoading
    },
    child () {
      if (!this.person) return []
      if (this.person.sex) return this.person.fatherChild
      return this.person.motherChild
    },
    person () {
      return this.$store.state.person
    },
    spouses () {
      if (!this.person) return []
      let spouseAtt = 'father'
      if (this.person.sex) {
        spouseAtt = 'mother'
      }
      if (!(this.child && this.child.length > 0)) return []
      const spouses = []
      this.child.map(children => {
        const finded = spouses.find(spouse => spouse.id === children[spouseAtt + 'Id'])
        if (finded !== undefined) return
        spouses.push(children[spouseAtt])
      })
      return spouses
    }
  },
  methods: {
    changePeople (id) {
      if (this.isLoading) return
      return this.$store.dispatch('getPerson', { id })
    },
    expandPerson (id) {
      console.log('expand person', id)
    }
  }
}
</script>
