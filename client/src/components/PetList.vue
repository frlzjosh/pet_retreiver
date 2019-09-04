<template>
    <div class="row pet-block">
        <div class="col-4">
            <router-link to="/petProfile">
                <div class="pet-list">
                    <!-- <photos :isForMessage="true" :photo="img_url"/> -->
                    <photos class="ProfilePic" :photo="img_doggo"></photos>
                </div>
            </router-link>
        </div>
        <div class="col-2">
            <p class="petStatus">Lost</p>
        </div>
        <div class="col-3"> 
            <span class="pet-info">
                <p class="petName">Pet name</p>
                <p>Last Seen:</p>
                <p>Miles away:</p>
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
</template>
<script>
import Photos from './../components/Photos'
export default {
    name: 'PetList',
    components: {
        Photos
    },
    data(){
        return{
            // img_url: 'https://avatars0.githubusercontent.com/u/26909882?s=460&amp;v=4',
            img_doggo: 'https://c.pxhere.com/photos/3c/47/dog_sweet_golden_puppy_pet_animal_friend_nature-597156.jpg!d'
        }

    },
    methods: {
        
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
    .ProfilePic{
        height: 100%;
        width: 100%;
        
    }
    .petName{
        font-weight: bold;
    }
    p{
        margin:0;
    }
    .messageButton{

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
    }

</style>