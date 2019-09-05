<template>
    <div>
        <div v-if="isForMessage" class="photo text-left">
            <img  class="photo-message" :src="photo" alt="profile image">
        </div>
        <div v-if="isForPetList" class="photo text-center">
            <img :src="photo" class="photo-petList" alt="profile image">
        </div>
        <div v-if="isForPetProfile" class="photo text-center mt-2">
            <img :src="photo" class="photo-petProfile" alt="">
        </div>

    </div>
</template>
<script>
export default {
  name: 'Photos',
  props: [
    'photo',
    'isForMessage',
    'isForPetList',
    'isForPetProfile'
  ],
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style lang="scss">
    .photo{
        &-message{
            height: 125px !important;
            width:auto;
            padding: 10px;
        }
        &-petList{
            height: 225px !important;
            width: auto;
        }
        &-petProfile{
            height: 450px !important;
            width: auto;
            border: 2px solid grey;
            border-radius: 4px;
        }
    }

</style>
