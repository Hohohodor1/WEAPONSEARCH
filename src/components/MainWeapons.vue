<template>
 <div >
  <header>  <div class="zbroya">Інформація про втрачену зброю</div>  </header>
             <nav class="top-menu">
  <ul class="menu-main">
    <li><router-link to="/MainWeapons">Пошук</router-link></li>
    <li><router-link to="/YearsChart">Графік років</router-link></li>
       <li><router-link to="/CaliberChart">Графіки калибров</router-link></li>
    <li><router-link to="/Info">Стаття</router-link></li>
  </ul>
</nav>
                <div id="table-wrapper">
                    <div id="table-scroll"> 
                    <table class="table table-striped" id="info-table">
                    <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Бренд</th>
                      <th scope="col">Тип ствола</th>
                      <th scope="col">Тип зброї</th>
                        <th scope="col">Серійний номер</th>
                            <th scope="col">Дата втрати</th>
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
                            <canvas id="CaliberChart" width="200" height="200"></canvas>  
<footer>
  <p>На сайті представлена Інформація з офіційних <a href="https://data.gov.ua/">відкритих даних України</a></p>
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
        W_NUMBER:'',
        weapons:[],
        CaliberChart:''
        
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