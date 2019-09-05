<template>
    <div class="account container">
        <div class="row">
            <div class="col-12">
                <h1>Create Account</h1>
            </div>
        </div>
        <div class="row account__question mt-5">
            <div class="col-12 mt-4">
                <h3 v-if="showForm === false">Do You Have A Pet?</h3>
            </div>
            <div v-show="showForm === false" class="col-6 mt-3 mb-4">
                <button @click="showForm=true" type="button" class="btn btn-primary">Yes</button>
            </div>  
            <div v-show="showForm === false" class="col-6 mt-3 mb-4">
                <router-link to="/hub"><button type="button" class="btn btn-danger">No</button></router-link>
            </div>
            <div v-if="showForm===true">
                <account-form></account-form>
            </div>
        </div>

    </div>
</template>
<script>
import AccountForm from './AccountForm.vue';
export default {
    name:'accountCreation',
    components: {
        AccountForm
    },
    data(){
        return{
            showForm: false,
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