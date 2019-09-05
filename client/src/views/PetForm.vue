<template>
    <div class="pet-form container">
        <h1>Report Pet</h1>

        <!-- selection buttons -->
        <div v-if="lostFormBool==false && foundFormBool==false">
            <div class="row form-group">
                <div class="col-6">
                    <button @click="showLostForm()" type="button" class="btn btn-warning">Lost</button>
                </div>
                <div class="col-6">
                    <button @click="showFoundForm()" type="button" class="btn btn-info">Found</button>
                </div>
            </div>
        </div>

        <div v-if="lostFormBool">
            <h3 class="text-center mt-4 mt-3">Please Fill Out The Questions Below</h3>
            <div v-if="lostFormBool" class="row form-group">
                <div class="col-12 text-left mb-3">
                    <label for="exampleInputEmail1">Pet Name</label>
                    <input v-model="userObject.pet_name" class="form-control" type="text" placeholder="Pet Name">
                </div>
                <div class="col-12 text-left mb-1">
                    <label for="exampleInputEmail1">Last Seen?</label>
                    <input v-model="petObject.last_seen" class="form-control" type="date" placeholder="Date">
                </div>
            </div>
        </div>

        <div v-if="lostFormBool==true || foundFormBool==true" class="row form-group">
            <h3 v-if="lostFormBool==false" class="text-center mt-4 mt-3">Please Fill Out The Questions Below</h3>
            <div class="col-12 text-left mb-3">
                <label for="exampleInputPet">Pet Type?</label>
                <select v-model="petObject.type" class="form-control" id="exampleFormControlSelect">
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Bird</option>
                    <option>Dinosaur</option>
                </select>
            </div>

            <div class="col-12 text-left mb-3">
                <label for="exampleInputEmail1">Wearing a Collar?</label>
                <select v-model="userObject.has_collar" class="form-control" id="exampleFormControlSelect1">
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div>

            <div class="col-12 text-left mb-3">
                <p>
                <label for="exampleInputEmail1">Upload Photo</label>
                </p>
                <input type="file" accept="image/*" class="input-file">
                    <p v-if="isSaving">
                    Uploading {{ fileCount }} files...
                    </p>
            </div>
                <div class="col-12 text-center mt-4">
                <router-link to="/hub"><button @click="sendUserObjectToState()" type="button" class="btn btn-primary">Submit</button></router-link>
                </div>
            </div>
        <router-link to="/hub">
        <button type="button" class="btn btn-danger">Cancel Report</button>
        </router-link>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    name: 'AccountForm',
    data(){
        return{
            userObject: {
                name: null,
                city: null,
                has_pet: null,
                pet_type: null,
                pet_name: null,
                has_collar: null
            },
            petObject: {
                pet_name: null,
                last_seen: null,
                pet_type: null,
                has_collar: null,
                description: null,
                owner: null

            },
            lostFormBool: false,
            foundFormBool: false
        }
    },
    mounted(){
    },
    methods: {
        ...mapActions(
            [
                'mutateUserInfo'
            ]
        ),
        sendUserObjectToState(){
            this.mutateUserInfo(this.userObject)
            this.lostBool=true
            this.foundBool=true
        },
        showLostForm(){
            this.lostFormBool=true
            this.foundFormBool=false
        },
        showFoundForm(){
            this.foundFormBool=true
            this.lostFormBool=false
        }
    }
}
</script>
<style lang="scss">
    .pet-form{
        padding-top: 4rem;
        margin-top: 1.5rem;
    }
</style>