<template>
<div class="login container">
    <h1>Login</h1>
    <form class="login__form" action="login">
        <input v-model="userName" type="username" placeholder="Username">
        <input type="password" placeholder="Password">
    </form>
    <div class="row justify-content-md-center mt-4 mb-4">
        <div class="col-md-3 text-center center-block">
        <router-link to="/hub"><button @click="mutateUserObject" type="button" class="btn btn-sm btn-primary">Login</button></router-link>
        </div>
    </div>
    <div class="md-layout-item login__options mt-3">
        <router-link to="/createAccount"><h3>Create Account</h3></router-link>
        <h3>Forgot Password</h3>
    </div>
</div>    
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name:'login',
    data(){
        return{
            userName: null
        }
    },
    methods: {
        ...mapActions(
            [
                'setUserName'
            ]
        ),
        mutateUserObject(){
            this.setUserName(this.userName)
        }
    }
}
</script>

<style lang="scss">
    .login{
        transform: scale(1.4);
        padding-top: 10rem;
        margin-top: 1.5rem;
        &__form{
            margin-top: 2.25rem;
            margin-bottom: 1rem;
        }
    }
</style>