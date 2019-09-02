<template>
    <div class="account container">
        <div class="row">
            <div class="col-12">
                <h1>Create Account</h1>
            </div>
        </div>
        <div class="row account__question mt-5">
            <div class="col-12 mt-4">
                <h3>Do You Have A Pet?</h3>
            </div>
            <div class="col-6 mt-3 mb-4">
                <router-link to="/accountForm"><button type="button" class="btn btn-primary">Yes</button></router-link>
            </div>
            <div class="col-6 mt-3 mb-4">
                <router-link to="/hub"><button type="button" class="btn btn-danger">No</button></router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'accountCreation',
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>
<style lang="scss">
    .account{
        padding-top: 4rem;
        margin-top: 1.5rem;
        width: 100%;
        &__question{
            border: 1px solid #041436;
            border-radius: 7.5px;
        }
    }
</style>