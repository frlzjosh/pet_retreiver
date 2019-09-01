<template>
    <div class="message">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <router-link to="/hub"><p>Go Back</p></router-link>
                    <h1 class="text-center">Direct Messages</h1>
                </div>
            </div>
            <div class="message__border">
                  <text-message message="I found your dog" :left="true"></text-message>
                <text-message message="How is he?" :left="false"></text-message>
                <text-message message="Here's his photo. He's doing well" :left="true"></text-message>
            </div>
        </div>
    </div>
</template>
<script>
import TextMessage from './../components/TextMessage'
export default {
    name: 'PersonalMessage',
    components:{
        TextMessage
    },
    data(){
        return {}
    },
    methods: {

    }
}
</script>

<style lang="scss">
    .message{
        margin-top: 3.75rem;
        &__border{
            border: 2px solid #041436;
            padding: 1rem;
            border-radius: 7.5px;
        }
    }

</style>