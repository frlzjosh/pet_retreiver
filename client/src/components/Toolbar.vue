<template>
    <div class="toolbar container">
        <div class="row">
            <div class="col-4 toolbar__item">
                <router-link to="/pets"><p class="toolbar__title">PETS</p></router-link>
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
    </div>
</template> 
<script>
export default {
    name: 'Toolbar',
    data(){
        return{

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