<template>
    <div class="profile container">
        <div class="row">
            <div class="col-12">
                <router-link to="/hub"><p>Go Back To Hub</p></router-link>
                <photos :isForPetProfile="true" :photo="img_url"></photos>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12">
                <h3>{{getUserInfo.name}}</h3>
                <div class="profile__pet-info">
                    <ul class="profile__pet-list">
                        <li class="profile__info profile__info--top">Pet Name: {{getUserInfo.pet_name}}</li>
                        <li class="profile__info">Pet Type: {{getUserInfo.pet_type}}</li>
                        <li class="profile__info">Lives In: {{getUserInfo.city}}, CA</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <h3>{{getUserInfo.name}}'s history on Pet Retriever</h3>
            <pet-list></pet-list>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Photos from './../components/Photos'
import MessageList from './../components/MessageList'
import PetList from './../components/PetList'
export default {
    name:'Profile',
    components: {
        Photos,
        MessageList,
        PetList
    },
    data(){
        return{
            img_url: "https://avatars0.githubusercontent.com/u/26909882?s=460&amp;v=4",
            name: "Josh",
            test: null
        }
    },
    computed: {
        ...mapGetters(
            [
                'getUserInfo'
            ]
        )
    },
    methods: {

    }   
}
</script>

<style lang="scss">
    .profile{
        margin-top: 1.5rem;
        padding-top: 4rem;
        &__info{
            &--top{
                padding-top: 5px;
            }
            padding-bottom: 3px;
        }
        &__pet-info{
            padding-top: 5px;
            border: 1px solid #041436;
            border-radius: 7.5px;
            text-align: left;
            font-size: 1.25rem;
        }
        &__pet-list{
            list-style: none;
            text-decoration: none;
        }
    }
</style>