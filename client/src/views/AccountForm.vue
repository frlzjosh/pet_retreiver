<template>
    <div class="account-form container">
        <h1>Create Account</h1>
        <h3 class="text-center mt-4 mt-3">Please Fill Out The Questions Below</h3>
        <div class="row form-group">
            <div class="col-12 text-left mb-3">
                <label for="exampleInputEmail1">What is your name?</label>
                <input v-model="userObject.name" class="form-control" type="text" placeholder="Full Name">
            </div>
            <div class="col-12 text-left mb-3">
                <label for="exampleInputEmail1">What City do you live in?</label>
                <input v-model="userObject.city" class="form-control" type="text" placeholder="City">
            </div>
            <div class="col-12 text-left mb-3">
                <label for="exampleInputEmail1">Pet Name</label>
                <input v-model="userObject.pet_name" class="form-control" type="text" placeholder="Pet Name">
            </div>
            <div class="col-12 text-left mb-3">
                <label for="exampleInputEmail1">Does Your Pet Have on a Collar?</label>
                <select v-model="userObject.has_collar" class="form-control" id="exampleFormControlSelect1">
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div>
            <div class="col-12 text-left mb-1">
                <label for="exampleInputEmail1">Pet Type</label>
                <input v-model="userObject.pet_type" class="form-control" type="text" placeholder="Pet Type">
            </div>
            <div class="col-12 text-center mt-4">
            <router-link to="/hub"><button @click="sendUserObjectToState()" type="button" class="btn btn-primary">Submit</button></router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'AccountForm',
  data () {
    return {
      userObject: {
        name: null,
        city: null,
        has_pet: null,
        pet_type: null,
        pet_name: null,
        has_collar: null
      }

    }
  },
  mounted () {
  },
  methods: {
    ...mapActions(
      [
        'mutateUserInfo'
      ]
    ),
    sendUserObjectToState () {
      this.mutateUserInfo(this.userObject)
    }
  }
}
</script>
<style lang="scss">
    .account-form{
        margin-top: 1.5rem;
    }
</style>
