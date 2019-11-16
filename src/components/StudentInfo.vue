<template>
    
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'

Vue.use(VueAxios, axios)
Vue.use(VueRouter)    
export default({
       props: {      
         id: '',
       },
       data: function() {
           return {  usd: 0,
      
        vid:'',  
        name:'',
        
        isDonePr:'', 
        group:'',
        students:[]
           },
           }
</script>