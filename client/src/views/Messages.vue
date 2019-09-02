<template>
    <div class="messages container">
        <router-link to="/hub"><p>Go Back To Hub</p></router-link>
        <h1>Messages</h1>
        <message-list></message-list>
        <message-list></message-list>
        <message-list></message-list>
    </div>
</template>
<script>
import MessageList from './../components/MessageList'
export default {
    name: 'Messages',
    components: {
        MessageList
    },
    data(){
        return{

        }
    },
    methods: {

    }
}
</script>
<style lang="scss">
    .messages{
        padding-top: 4rem;
        margin-top: 1.5rem;
    }
</style>