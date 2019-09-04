

<template>
    <div class="pets container">
        <router-link to="/hub"><p>Go Back</p></router-link>
        <p>Pets Nearby</p>
            <li class="petProfileList">
                <pet-list></pet-list>
                <pet-list></pet-list>
                <pet-list></pet-list>
            </li>
    </div>
</template>
<script>
import PetList from './../components/PetList'
export default {
    name:'Pets',
    components:{
        PetList
    },
    data(){
        return{

        }
    },
    methods: {

    }
    
}
</script>
<style lang="scss">
    .pets{
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