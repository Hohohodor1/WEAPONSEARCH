<template>
 <div id="MainWeapons">
  <header>  <div class="zbroya">Інформація про втрачену зброю</div>  </header>
             <nav class="top-menu">
  <ul class="menu-main">
    <li><a href="" class="current">Поиск</a></li>
    <li><router-link to="/YearsChart">График годов</router-link></li>
       <li><router-link to="/CalieberChart">Графики калибров</router-link></li>
    <!-- <li><router-link to="">Статья</a></li> -->
  </ul>
</nav>
                <div id="table-wrapper">
                    <div id="table-scroll"> 
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
                            <canvas id="CaliberChart" width="400" height="400"></canvas>  
<footer>
  <p>На сайте предоставлены данные взятые с официального сайта <a href="www.data.gov.ua">открытых данных Украины</a></p>
</footer>  
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
  height: 80px;
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