<template>
    <div class="profile container">
        <div class="row">
            <div class="col-12">
                <router-link to="/hub"><p>Go Back To Nearby Pets</p></router-link>
                <photos :isForPetProfile="true" :photo="img_doggo"></photos>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12">
                <h3>{{petName}}</h3>
                <div class="profile__pet-info">
                    <ul class="profile__pet-list">
                        <li class="profile__info profile__info--top">Pet Name: Thomas</li>
                        <li class="profile__info pet__info">Pet Type: {{petType}}</li>
                        <li class="profile__info pet__info">Lives In: Canoga Park, CA</li>
                        <li class="profile__info pet__info">Owner:{{name}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Photos from './../components/Photos'
export default {
  name: 'PetProfile',
  components: {
    Photos
  },
  data () {
    return {
      // img_url: "https://avatars0.githubusercontent.com/u/26909882?s=460&amp;v=4",
      img_doggo: 'https://c.pxhere.com/photos/3c/47/dog_sweet_golden_puppy_pet_animal_friend_nature-597156.jpg!d',
      name: 'Josh',
      petName: 'Thomas',
      petType: 'Dog',
      test: null,
      status_array: ['lost', 'lost', 'found']
    }
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
                font-size: 1.4rem;
            }
            padding-bottom: 3px;
        }
        &__pet-info{
            padding-top: 5px;
            border: 1px solid #041436;
            border-radius: 7.5px;
            text-align: left;
            font-size: 1.25rem;
            button{
                text-align: center;
            }
        }
        &__pet-list{
            list-style: none;
            text-decoration: none;
        }
    }
    .pet{
        &__info{
            padding-top:10px;
        }
    }
    button{
        text-align: center;
    }
</style>
