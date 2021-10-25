<template>
        <div class="button-selector">
                <button type="button" :class="[{ active: props.mode }, inactive]" @click="toggleSwitch(true)"><h4>{{props.modes[0]}}</h4></button>
                <button type="button" :class="[{ active: !props.mode }, inactive]" @click="toggleSwitch(false)"><h4>{{props.modes[1]}}</h4></button>
        </div>  
</template>

<script>

export default {
    props: ['modes', 'mode'],
    emits: ['get-mode'],
    
    setup(props, { emit }) {
        const inactive = null

        function toggleSwitch(val) {
            emit('get-mode', val)
        }

        return { inactive, toggleSwitch, props }

    },
}
</script>