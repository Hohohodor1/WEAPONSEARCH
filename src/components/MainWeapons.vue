<template>
 <div id="MainWeapons">
   <header>			
					<div class="zbroya">Інформація про втрачену зброю</div>

   </header>

        <div class="search">

            <!-- <input placeholder="Поиск" v-model="search2"> -->
           
        </div>
             <!-- <input class="form-control" type="text" placeholder="введите номер" id="search-text" onkeyup="tableSearch()"> -->
                <div id="table-wrapper">
                    <div id="table-scroll">
                  <nav class="top-menu">
  <ul class="menu-main">
    <li><a href="" class="current">Поиск</a></li>
    <li><router-link to="/Chart">Графики</router-link></li>
    <li><a href="">Статья</a></li>
  </ul>
</nav>
                   
                    <table class="table table-striped" id="info-table">
                    <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">BRAND</th>
                      <th scope="col">TYPE1</th>
                      <th scope="col">TYPE2</th>
                        <th scope="col">W_NUMBER</th>
                            <th scope="col">THEFT_DATA</th>
                    </tr>
                        <tr>
                      <th scope="col"><input placeholder="Поиск" v-model="SearchByID" ></th>
                      <th scope="col"><input placeholder="Поиск" v-model="SearchByType1"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                        <th scope="col"><input placeholder="Поиск" v-model="SearchByW_NUMBER" ></th>
                            <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                        <!-- <tr class="product"  v-for="(item) in weapons"  v-bind:key="item._id"> -->
                    <tr class="product" v-for="(item) in weapons" v-bind:key="item.ID" v-show="item.ID.includes(SearchByID) && item.BRAND.includes(SearchByType1) && item.W_NUMBER.includes(SearchByW_NUMBER)">

                      <td>{{item.ID}} </td>
                      <td>{{item.BRAND}} </td>
                      <td>{{item.TYPE1}} </td>
                      <td>{{item.TYPE2}} </td>
                      <td >{{item.W_NUMBER}} </td>
                      <td>{{item.THEFT_DATA}} </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                </div>
              <canvas id="myChart" width="400" height="400"></canvas> 
              <canvas id="YearsChart" width="400" height="400"></canvas>
              
 </div>     
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
export default({
       props: {      
         ID: '',
       },
        data: function() {
           return { 
               SearchByID: '', 
               SearchByType1: '', 
               SearchByW_NUMBER:'',
        BRAND:'',  
        TYPE1:'',
        TYPE2:'',
        isDonePr:'', 
        W_NUMBER:'',
        weapons:[]
        
    }},

    methods:{
       

},
    mounted() {
    

     this.weapons = allweapons;

            
    },
     
 });
</script>
<style scoped>
#table-wrapper {
  position:relative;
}
#table-scroll {
  height:450px;
  overflow:auto;  
  margin-top:20px;
}
#table-wrapper table {
  width:100%;
    
}
</style>