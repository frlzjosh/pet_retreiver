<template>
    <div class="row">
        <div v-for="(element,index) in messages" :key="index" class="col-12 message-list__pointer">
            <router-link to="/personalMessage">
                <div class="message-list">
                    <div class="message-list__name">
                        <h3>{{element.name}}</h3>
                        <p>Sent Last Message at {{hour[index]}}:{{minutes[index]}}PM</p>
                    </div>
                    <img class="message-list__photo" :src="element.img" alt="">
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import Photos from './../components/Photos'
export default {
    name: 'MessageList',
    components: {
        Photos
    },
    props: [
        'messages'
    ],
    data(){
        return{
            img_url: 'https://avatars0.githubusercontent.com/u/26909882?s=460&amp;v=4',
            minutes: [],
            hour: []
        }

    },
    created(){
        this.randomizeTime()
    },
    methods: {
        randomizeTime(){
            var i = 0
            for( i = 0; i< 4; i++){
                this.minutes.push(Math.floor(Math.random() * 60))
                this.hour.push(Math.floor(Math.random() * 12))
                if(this.hour[i] < 0){
                    this.hour[i] = 1
                }
                if(this.minutes[i] < 10){
                    this.minutes[i] = this.minutes[i] +9;
                }
            }
        }
    }
}
</script>
<style lang="scss">
    .message-list{
        height: auto;
        width: 100%;
        border: 1px solid black;
        &__photo{
            margin-right: 1.5rem;
            float: right;
            display: inline;
            width: 300px;
            height: 310px !important;
            padding: 20px;  
        }
    
        &__name{
            margin-top: 7rem;
            margin-left: 7rem;
            float: left;
            margin-right: 10px;
            color: black;
            display: inline;
        }
    }

</style>