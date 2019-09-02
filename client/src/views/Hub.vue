<template>
    <div class="hub container">
        <router-link to="/"><p>Logout</p></router-link>
        <div class="row">
            <div class="col-12">
                <GmapMap
                class="text-center"
                    :center="{lat:34.238159, lng:-118.529460}"
                    :zoom="15"
                    map-type-id="terrain"
                    style="width: 100%; height: 600px;"
                >
                </GmapMap>
            </div>
        </div>
        <toolbar/>
    </div>
</template>
<script>
import toolbar from './../components/Toolbar'
export default {
    name: 'Hub',
    components: {
        toolbar
    },
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
        padding-top: 3.25rem;
        margin-top: 1.5rem;
        position: relative;
    }

</style>