<template>
<div class="message">
    <div class="row">
        <div class="col-12">
            <router-link to="/hub"><p>Go Back</p></router-link>
            <h1 class="text-center">Direct Messages</h1>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'Message',
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
    }

</style>