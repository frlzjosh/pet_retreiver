<template>
    <div class="row">
        <div class="col-12">
            <router-link to="/personalMessage">
                <div class="message-list">
                    <photos :isForMessage="true" :photo="img_url"/>
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
    }

</style>