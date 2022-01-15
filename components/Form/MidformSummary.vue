<template>
    <div class="cargo-details-container" v-for="i in formcounter" :key="i">
        <h1>Cargo Details</h1>
        <form  class="form-grid">
            <div class="form-element" >
                 <div class="fill-in my-1">
                        <h4>Type</h4>
                        <div class="searchable">
                            <input type="text" placeholder="Cargo Type" v-model="cargo" @focus="showList = true" @keyup.down="arrowDown" @keyup.up="arrowUp" @keydown.enter.prevent="onEnter">
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
                        <input type="number" placeholder="Length" ref="length" @input="clickedOutside">                            
                    </div>
                </div>
            </div>
            <div class="form-element">
                <div class="fill-in my-1">
                    <h4>Width</h4>                        
                    <div class="searchable">
                        <input type="number" placeholder="Width" ref="width" @input="clickedOutside">                            
                    </div>
                </div>
            </div>
            <div class="form-element">
                <div class="fill-in my-1">
                    <h4>Height</h4>
                    <div class="searchable">
                        <input type="number" placeholder="Height" ref="height" @input="clickedOutside">
                    </div>
                </div>
            </div>
            </form>
            
            <form class="form-grid">

            <div class="form-element">
                <div class="fill-in my-1">
                    <h4>Quantity</h4>
                    <div class="searchable">
                        <input type="number" placeholder="Quantity" ref="quantity" @input="clickedOutside">
                    </div>
                </div>
            </div>
            <div class="form-element">
                <div class="fill-in my-1">
                    <h4>Weight</h4>
                    <div class="searchable">
                        <input type="number" placeholder="Weight" ref="weight" @input="clickedOutside">
                    </div>
                </div>
            </div>
        </form>
        <div class="form-grid">
        <!-- <div class="form-element">
            <div class="fill-in btn my-1" v-if="key == formcounter">
                <button  @click.prevent="addmidForm">+Add More</button>
            </div>
        </div> -->
        
        <div class="form-element">
            <div class="fill-in btn my-1">
                <button @click="$emit('midform-button')">{{props.formname}}</button>
            </div>
        </div>
        </div>
</div>
<!-- Summary starts -->

<div class="cargo-details-container" v-if="!!Summary" >
    <h1>Cargo Summary</h1>
    <div class="cargo-details-subcontainer-6">
        <div class="cargo-summary-element">
            <p><strong>Total Quantity</strong></p>
            <p>{{Summary[0].midform.quantity}}</p>
            <!-- <p v-for="(item, index) in summ" :key="index">{{item.summary}}</p> -->
        </div>
        <div class="cargo-summary-element">
            <p><strong>Total Volume </strong>({{Summary[0].volume_unit}})</p>
            <p>{{Summary[0].TotalVolume}}</p>
            <!-- <p v-for="(item, index) in summ" :key="index">{{item.summary}}</p> -->
        </div>
        <div class="cargo-summary-element">
            <p><strong>Total Weight </strong>(kg)</p>
            <p>{{Summary[0].TotalWeight}}</p>
            <!-- <p v-for="(item, index) in summ" :key="index">{{item.summary}}</p> -->
        </div>
        <div class="cargo-summary-element">
            <p><strong>Density </strong>({{Summary[0].density_unit}})</p>
            <p>{{Summary[0].Density}}</p>
            <!-- <p v-for="(item, index) in summ" :key="index">{{item.summary}}</p> -->
        </div>
        <div class="cargo-summary-element">
            <p><strong>Chargeable Weight</strong> (kg)</p>
            <p>{{Summary[0].Chargeable}}</p>
            <!-- <p v-for="(item, index) in summ" :key="index">NA</p> -->
        </div>
    </div>
</div>

</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
    props: ['formname'],
    emits: ['midform-button'],
    
    setup(props) {
        const store = useStore()
        const formcounter = ref(1)

        const cargotypes = ['General Cargo', 'Temperature Controlled']
        const arrowCounter = ref(-1)
        const showList = ref(false)
        const inactive = null
        
        const length = ref('')
        const width = ref('')
        const height = ref('')
        const weight = ref(0)
        const quantity = ref(1)
        const stacking = ref(true)
        const turnable = ref(true)
        const weighing = ref(true)
        const dimension = ref(true)
        const cargo = ref(null)

        const Summary = computed(function() { 
          return store.getters['bookingdat/getformSummary'] 
        })

        function setCargotype(val) {
            cargo.value = val
            showList.value = false
            arrowCounter.value = -1;
        }
        function arrowDown() {
            if (arrowCounter.value < cargotypes.length -1) { 
                arrowCounter.value = arrowCounter.value + 1; 
                cargo.value = cargotypes[arrowCounter.value]
                } 
            }

        function arrowUp() {
            if (arrowCounter.value > 0) { 
                arrowCounter.value = arrowCounter.value - 1
                cargo.value = cargotypes[arrowCounter.value]
                } 
            }
        function onEnter() {
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
                const middledata = { id: props.formid, length: length.value.value, width: width.value.value, height: height.value.value, 
                                        weight: weight.value.value, quantity: quantity.value.value, type: cargo.value, stacking: stacking.value, 
                                        weighing: weighing.value, turnable: turnable.value, dimension: dimension.value };
                store.dispatch('bookingdat/addmidformData', middledata);
            }
        }
        function addmidForm() {
            if (store.getters['bookingdat/getmidform'].length == formcounter.value) {
                formcounter.value += 1
            }  //  ///checks if previous form has been filled
        }

        return { cargo, length, width, height, weight, quantity, clickedOutside, props, stacking, turnable, weighing, dimension,
                 inactive, setCargotype, getStacking, getTurnable, getWeighing, getDimension, formcounter,
                 cargotypes, showList, arrowDown, arrowCounter, arrowUp, onEnter, addmidForm, Summary }
    },
}

</script>


