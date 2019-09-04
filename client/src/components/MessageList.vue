<template>
    <div class="row">
        <div v-for="(element,index) in messages" :key="index" class="col-12">
            <router-link to="/personalMessage">
                <div class="message-list">
                    <h3 class="message-list__name">{{element.name}}</h3>
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
            img_url: 'https://avatars0.githubusercontent.com/u/26909882?s=460&amp;v=4'
        }

    },
    methods: {

    }
}
</script>
<style lang="scss">
    .message-list{
        width: 100%;
        border: 1px solid black;
        &__photo{
            margin-right: 1.5rem;
            float: right;
            display: inline;
            width: 300px;
            height: 300px;
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