<template>
    <div class="account-form container">
        <h1>Create Account</h1>
        <h3 class="text-center mt-4 mt-3">Please Fill Out The Questions Below</h3>
        <div class="row form-group">
            <div class="col-12 text-left mb-3">
                <label for="exampleInputEmail1">Pet Name</label>
                <input class="form-control" type="text" placeholder="Pet Name">
            </div>
            <div class="col-12 text-left mb-3">
                <label for="exampleInputEmail1">Does Your Pet Have on a Collar?</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div>
            <div class="col-12 text-left mb-1">
                <label for="exampleInputEmail1">Pet Type</label>
                <input class="form-control" type="text" placeholder="Pet Type">
            </div>
            <div class="col-12 text-center mt-4">
            <router-link to="/hub"><button type="button" class="btn btn-primary">Submit</button></router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AccountForm',
    data(){
        return{

        }
    },
    methods: {

    }
}
</script>
<style lang="scss">
    .account-form{
        padding-top: 4rem;
        margin-top: 1.5rem;
    }
</style>