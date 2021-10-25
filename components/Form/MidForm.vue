<template>
    <div class="cargo-details-container">
        <h1>Cargo Details</h1>
        <form class="form-grid">
            <div class="form-element" >
                 <div class="fill-in my-1">
                        <h4>Type</h4>
                        <div class="searchable">
                            <input type="text" placeholder="Cargo Type" v-model="cargo" @focus="showList = true" @keyup.down="arrowDown" @keyup.up="arrowUp" @keyup.enter.prevent="onEnter">
                            <ul class="dropdown-search" v-if="showList">
                                <li v-for="(type, i) in cargotypes" :key="i" :class="{'active-list': i === arrowCounter }" @click="setCargotype(type)"><h3>{{type}}</h3></li> 
                            </ul>
                        </div>
                    </div>
            </div>
        </form>

        <form class="form-grid">
             <div class="form-element">
                <div class="fill-in my-1">
                    <slide-button @get-mode="getStacking" :modes="['Stackable', 'Unstackable']" :mode="stacking"></slide-button>
                </div>
            </div> 

            <div class="form-element">
                <div class="fill-in my-1">
                    <slide-button @get-mode="getTurnable" :modes="['Turnable', 'Not turnable']" :mode="turnable"></slide-button>
                </div>
            </div>  

            <div class="form-element">
                <div class="fill-in my-1">
                    <slide-button @get-mode="getDimension" :modes="['Cm', 'Inch']" :mode="dimension"></slide-button>
                </div>
            </div>  

            <div class="form-element">
                <div class="fill-in my-1">
                    <slide-button @get-mode="getWeighing" :modes="['Per-Item', 'Total']" :mode="weighing"></slide-button>
                </div>
            </div>  
            
        </form>
        
        <form class="form-grid">
            <div class="form-element">
                <div class="fill-in my-1">
                    <h4>Length</h4>                        
                    <div class="searchable">
                        <input type="number" placeholder="Length" ref="length" @blur="clickedOutside">                            
                    </div>
                </div>
            </div>
            <div class="form-element">
                <div class="fill-in my-1">
                    <h4>Width</h4>                        
                    <div class="searchable">
                        <input type="number" placeholder="Width" ref="width" @blur="clickedOutside">                            
                    </div>
                </div>
            </div>
            <div class="form-element">
                <div class="fill-in my-1">
                    <h4>Height</h4>
                    <div class="searchable">
                        <input type="number" placeholder="Height" ref="height" @blur="clickedOutside">
                    </div>
                </div>
            </div>
            </form>
            
            <form class="form-grid">

            <div class="form-element">
                <div class="fill-in my-1">
                    <h4>Quantity</h4>
                    <div class="searchable">
                        <input type="number" placeholder="Quantity" ref="quantity" @blur="clickedOutside">
                    </div>
                </div>
            </div>
            <div class="form-element">
                <div class="fill-in my-1">
                    <h4>Weight</h4>
                    <div class="searchable">
                        <input type="number" placeholder="Weight" ref="weight" @blur="clickedOutside">
                    </div>
                </div>
            </div>
        </form>
        <div class="form-grid">
        <div class="form-element">
            <div class="fill-in btn my-1" v-if=" props.formid == props.formno">
                <button  @click.prevent="$emit('addmidForm')">+Add More</button>
            </div>
        </div>
        
        <div class="form-element">
            <div class="fill-in btn my-1">
                <button type="submit">Search Quotes</button>
            </div>
        </div>
        </div>
</div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import SlideButton from '../SlideButton.vue'

export default {
    props: ['formid', 'formno'],
    emits: ['addmidForm'],
    components: {
        SlideButton
    },
    
    setup(props) {
        
        const store = useStore();

        const cargotypes = ['General Cargo', 'Temparature Controlled', 'Live Animals', 'Human Remains', 'Dangerous Goods', 'High Value']
        const arrowCounter = ref(-1);
        const length = ref('');
        const width = ref('');
        const height = ref('');
        const weight = ref(0);
        const quantity = ref(1);
        const stacking = ref(true);
        const turnable = ref(true);
        const weighing = ref(true);
        const dimension = ref(true)
        const cargo = ref(null);
        const showList = ref(false);
        const inactive = null

        function setCargotype(val) {
            cargo.value = val
            showList.value = false
            arrowCounter.value = -1;
        }
        function arrowDown() {
            if (arrowCounter.value < cargotypes.length -1) { arrowCounter.value = arrowCounter.value + 1; } 
            }

        function arrowUp() {
            if (arrowCounter.value > 0) { arrowCounter.value = arrowCounter.value - 1;} 
            }

        function onEnter() {
            cargo.value = cargotypes[arrowCounter.value]
            showList.value = false
            arrowCounter.value = -1;
        }

        function getStacking(val) {
            stacking.value = val;
            clickedOutside()
        }
        function getTurnable(val) {
            turnable.value = val;
            clickedOutside()
        }
        function getWeighing(val) {
            weighing.value = val;
            clickedOutside()
        }
        function getDimension(val) {
            dimension.value = val;
            clickedOutside()
        }
        

        function clickedOutside() {
            if ((height.value.value !== '') && (length.value.value!== '') && (width.value.value !== '')&& (weight.value.value !== '') && (quantity.value.value !== '')) {
                const middledata = { id: props.formid, length: length.value.value, width: width.value.value, height: height.value.value, weight: weight.value.value, quantity: quantity.value.value, type: cargo.value, stacking: stacking.value, weighing: weighing.value, turnable: turnable.value, dimension: dimension.value };
                store.dispatch('bookingdat/addmidformData', middledata);
            }
        }

        return { cargo, length, width, height, weight, quantity, clickedOutside, props, stacking, turnable, weighing, dimension,
         inactive, setCargotype, getStacking, getTurnable, getWeighing, getDimension,
          cargotypes, showList, arrowDown, arrowCounter, arrowUp, onEnter }
    },
}

</script>


