<template>
<div class="login container">
    <h1>Login</h1>
    <form class="login__form" action="login">
        <input type="username" placeholder="Username">
        <input type="password" placeholder="Password">
    </form>
    <router-link to="/hub"><md-button class="md-raised md-primary">Login</md-button></router-link>
    <div class="md-layout-item login__options mt-3">
        <router-link to="/createAccount"><h3>Create Account</h3></router-link>
        <h3>Forgot Password</h3>
    </div>
</div>    
</template>
<script>
export default {
    name:'login',
    data(){
        return{

        }
    },
    methods: {
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