<template>
    <div class="toolbar container">
        <div class="row">
            <div class="col-4 toolbar__item">
                <p @click="showPets=true" class="toolbar__title">PETS</p>
                <p v-show="showPets==true" @click="showPets=false">Hide Pets</p>
                <font-awesome-icon icon="dog" size="lg"/>

            </div>
            <div class="col-4 toolbar__item">
                <router-link to="/messages"><p class="toolbar__title">DM</p></router-link>
                <font-awesome-icon icon="envelope" size="lg"/>

            </div>
            <div class="col-4 toolbar__item">
                <router-link to="/profile"><p class="toolbar__title">PROFILE</p></router-link>
                <font-awesome-icon icon="user-circle" size="lg"/>
            </div>
        </div>
        <div v-if="showPets=== true" class="row">
            <pets/>
        </div>
    </div>
</template> 
<script>
import Pets from './../views/Pets'
export default {
    name: 'Toolbar',
    components:{
        Pets
    },
    data(){
        return{
            showPets: false
        }
    },
    methods: {

    }
}
</script>
<style lang="scss">
    .toolbar{
        &__item{
            background-color: black;
            height: 100px;
            width: 100px;
            border: 3px solid white;
            color: white;
        }
        &__title{
            padding-top: 20px;

        }
    }
</style>