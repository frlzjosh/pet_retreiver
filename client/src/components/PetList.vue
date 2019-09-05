<template>
    <div>
        <div v-for="(element, index) in getPetImages" :key="index" class="row pet-block">
            <div class="col-4">
                <router-link to="/petProfile">
                    <div class="pet-list">
                        <photos class="ProfilePic" :isForPetList="true" :photo="element"></photos>
                    </div>
                </router-link>
            </div>
            <div class="col-2 pt-5">
                <p class="petStatus">{{status_array[index]}}</p>
            </div>
            <div class="col-3 pt-4">
                <span class="pet-info">
                    <p class="petName">Pet name: {{random_names[index]}}</p>
                    <p>Last Seen: {{locations[index]}} </p>
                    <p>Miles away: {{miles[index]}}</p>
                </span>
            </div>
            <div class="col-3">
                <span class="messageButton">
                    <router-link to="/petProfile">
                        <Button>View</Button>
                    </router-link>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Photos from './../components/Photos'
export default {
  name: 'PetList',
  components: {
    Photos
  },
  data () {
    return {
      random_names: ['Mike', 'Alex', 'Dane'],
      status_array: ['Lost', 'Lost', 'Found'],
      locations: ['Winnetka, CA', 'Westwood, CA', 'North Hollywood, CA'],
      miles: []
    }
  },
  created () {
    this.generateRandomMiles()
  },
  computed: {
    ...mapGetters(
      [
        'getPetImages',
        'getPetNames'
      ]
    )
  },
  methods: {
    generateRandomMiles () {
      for (var i = 0; i < 3; i++) {
        this.miles.push(Math.floor(Math.random() * 10))
      }
    }
  }
}
</script>
<style lang="scss">
    .pet-list{
        width: 100%;
        height: 20%;
        //border: 1px solid black;
        border-radius: 5px;
    }
    .pet-info{
        align-self: center;
    }
    .petName{
        font-weight: bold;
    }
    p{
        margin:0;
    }
    button{
        border-radius: 5px;
        width: 100%;
        height: 100%;
    }
    .petStatus{
        font-weight: bold;
        border: 1px solid red;
        border-radius: 5px;
    }
    .pet-block{
        border: 1px solid black;
        margin-bottom: 1rem;
        padding: 7px;
        border-radius: 7.5px;
    }

</style>
