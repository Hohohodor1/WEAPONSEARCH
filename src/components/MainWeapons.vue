<template>
 <div id="MainWeapons">
            <table class="table table-dark">
                    <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">BRAND</th>
                      <th scope="col">TYPE1</th>
                      <th scope="col">TYPE2</th>
                        <th scope="col">W_NUMBER</th>
                            <th scope="col">THEFT_DATA</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="product" v-for="(item) in weapons" v-bind:key="item._id">

                      <td>{{item.ID}} </td>
                      <td>{{item.BRAND}} </td>
                      <td>{{item.TYPE1}} </td>
                      <td>{{item.TYPE2}} </td>
                      <td >{{item.W_NUMBER}} </td>
                      <td>{{item.THEFT_DATA}} </td>
                   
                      <!-- <td><button v-on:click = "DlStudentById(item._id)">Видалити</button> </td> -->
                    </tr>
                    </tbody>
                  </table>
        
        <!-- <input type="text" v-model="name" placeholder="name">
        <input type="checkbox" id="checkbox" v-model="isDonePr">
        <label for="checkbox">   </label>
        <select v-model="group">
            <option selected>RPZ1</option>
            <option>RPZ2</option>
        </select> 
        <button @click="hope()" >Dob </button>   -->

        </div>
               
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
export default({
       props: {      
         id: '',
       },
        data: function() {
           return {  
        vid:'',  
        name:'',
        
        isDonePr:'', 
        group:'',
        weapons:[]
        
    }},

    methods:{
       

},
    mounted: function() {
            //     Vue.axios.get("http://46.101.212.195:3000/students").then((response) =>
            // {   
            //     this.students = response.data;
            //     console.log(response.data);
                
            // } ); 
                    this.weapons = allweapons;
            
            
         },
     
});
</script>