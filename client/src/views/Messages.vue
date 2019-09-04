<template>
    <div class="messages container">
        <router-link to="/hub"><p>Go Back To Hub</p></router-link>
        <h1>Messages</h1>
        <message-list :messages="messageInfo"></message-list>
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
            messageInfo: [
                {
                    img: 'https://avatars0.githubusercontent.com/u/26909882?s=460&amp;amp;v=4',
                    name: 'Josh'
                },
                {
                    img: 'https://thefader-res.cloudinary.com/private_images/w_1440,c_limit,f_auto,q_auto:best/IMG_3270_gj6q6c/lil-b-interview.jpg',
                    name: 'Lil B'
                },
                {
                    img: 'https://pbs.twimg.com/media/EAlLEfQU8AAxhc7.jpg',
                    name: 'Yung Kamala Harris'
                },
                {
                    img: 'https://akns-images.eonline.com/eol_images/Celebrities_Gallery/20061007/293.pitt.troy.100506.jpg',
                    name: 'Da Pitt'
                }
            ]
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