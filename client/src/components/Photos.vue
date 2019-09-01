<template>
    <div v-if="isForMessage" class="photo text-left">
        <img  class="photo-message" :src="photo" alt="profile image">
    </div>
    <div v-else class="photo text-center">
        <img :src="photo" alt="profile image">    
    </div>    
</template>
<script>
export default {
    name:'Photos',
    props: [
        'photo',
        'isForMessage'
    ],
    data(){
        return{

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
    }


</style>