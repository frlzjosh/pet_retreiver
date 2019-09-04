<template>
    <div class="row">
        <div class="col-12">
            <router-link to="/petProfile">
                <div v-for="(element, index) in pets" :key="index" class="pet-list">
                    <img class="pet-list__photo" :src="element.img" alt="photo" >
                        <h3>Name: {{element.name}}</h3>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:'PetList',
    props: [
        'pets'
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
    .pet-list{
        border: 1px solid black;
        border-radius: 10px;
        margin-bottom: 1rem;
        padding: 2rem;
        &__photo{
            margin-bottom: 1rem;
            width: 200px;
            height: 125px;
        }
        &__info{
        }
    }

</style>