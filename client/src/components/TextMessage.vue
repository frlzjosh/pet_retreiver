<template>
    <div class="row">
        <div class="col-12">
            <div v-if="left" class="message-text message-text--left">
                <p class="text-left message-text__body">{{message}}</p>
            </div>
            <div v-else class="message-text message-text--right">
                <p class="text-right message-text__body">{{message}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TextMessage',
  props: [
    'message',
    'left'
  ],
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
    .message-text{
        &--right{
            background-color: green;
            float: right;
        }
        &--left{
            background-color: #041436;
            float: left;
        }
        margin-bottom: 3px;
        width: 75%;
        border-radius: 5px;
        color: #FAFAFA;
        height: auto;
        &__body{
            padding-top: 5px;
            padding-left: 10px;
            padding-right: 10px;
            font-size: 1rem;
        }
    }
</style>
