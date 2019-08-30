<template>
    <div class="toolbar container">
        <div class="row">
            <div class="col-4 toolbar__item">
                <p class="toolbar__title">PETS</p>

            </div>
            <div class="col-4 toolbar__item">
                <p class="toolbar__title">DM</p>

            </div>
            <div class="col-4 toolbar__item">
                <p class="toolbar__title">PROFILE</p>
                
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