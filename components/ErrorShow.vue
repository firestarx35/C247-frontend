<template>
    <div v-if="data.status" :id="styleclass"><p>{{data.message}}</p></div>
</template>

<script>
import { computed, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {

    setup() {

        const store = useStore()

        const data = computed(function() { return store.getters['userdat/getErrorMessage']})
        const styleclass = computed(function() { if (data.value.type == true) { return 'positive-message' } 
                                                 else { return 'error-message' }
                                            }
                                    )

        return { data, styleclass }
    },
}
</script>