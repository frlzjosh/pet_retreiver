<template>
    <div class="hub">
        <GmapMap
            :center="{lat:34.238159, lng:-118.529460}"
            :zoom="15"
            map-type-id="terrain"
            style="width: 500px; height: 300px"
        >
        </GmapMap>
    </div>
</template>
<script>
export default {
    name: 'Hub',
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>

<style lang="scss">
    .hub{
        background-color: #012f70;
    }
</style>