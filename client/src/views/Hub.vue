<template>
    <div class="hub container">
        <router-link to="/"><p>Logout</p></router-link>
        <div class="row">
            <div class="col-12 hub__header">
                <h2>Hello {{getUserInfo.name}}!</h2>
                <p>Don't worry, {{getUserInfo.pet_name}} will be found.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <GmapMap
                class="text-center"
                    :center="{lat:34.238159, lng:-118.529460}"
                    :zoom="15"
                    map-type-id="terrain"
                    style="width: 100%; height: 600px;"
                >
                <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
                />
                </GmapMap>
            </div>
        </div>
        <toolbar/>
    </div>
</template>
<script>
import toolbar from './../components/Toolbar'
import { mapGetters} from 'vuex'
export default {
    name: 'Hub',
    components: {
        toolbar
    },
    data(){
        return{
            name: null,
            markers: [
                {
                    position: {
                        lat:34.238154, lng:-118.529460
                        }
                },
                {
                    position: {
                        lat:34.2460743, lng:-118.5370213
                        }
                },
                {
                    position: {
                        lat:34.2433018, lng:-118.5155767
                    },

                },
                {
                    position: {
                        lat:34.2401014, lng:-118.5428577
                    }
                },
                {
                    position: {
                        lat:34.2408014, lng:-118.5428677
                    }
                },
                {
                    position: {
                        lat:34.2402214, lng:-118.5428627
                    }
                }
            ]
        }
    },
    computed: {
        ...mapGetters(
            [
                'getUserInfo'
            ]
        )
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