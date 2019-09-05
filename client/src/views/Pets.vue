

<template>
    <div class="pets mt-5 pb-5 container">
        <h3>Pets Nearby</h3>
            <li class="petProfileList">
                <pet-list></pet-list>
            </li>
    </div>
</template>
<script>
import {mapGetters } from 'vuex'
import PetList from './../components/PetList'
export default {
    name:'Pets',
    components:{
        PetList
    },
    data(){
        return{
            petsInfo: [
                {
                    name: 'Tommy',
                    img:'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg',
                },
                {
                    name: 'Mike',
                    img: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13002253/GettyImages-521536928-_1_.jpg',
                },
                {
                    name: 'Sarah',
                    img: 'https://cdn.filestackcontent.com/RLMuhnhCTv6ruG9iWke4',
                },
                {
                    name: 'Willy',
                    img: 'https://i.ytimg.com/vi/jjSkfSDF6Oo/maxresdefault.jpg'
                }
            ]
                
        }
    },
    computed: {
        ...mapGetters(
            [
                'getPetImages',
                'getPetNames'
            ]
        )
    },
    mounted(){
    },
    methods: {

    }
    
}
</script>
<style lang="scss">
    .pets{
        z-index: 0;
        margin-top: 2rem;
        padding-top: 1rem;
    }
    .petProfileList{
        // height: 20px;
    }
    li{
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
</style>