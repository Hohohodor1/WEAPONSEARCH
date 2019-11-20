<template>
 <div id="MainWeapons">
   <header>
			<div class="header-overlay"></div>
			
					<div class="zbroya">Інформація про втрачену зброю</div>

   </header>
<!-- 
        <div class="search">
      <form class="				searchbar">
            <input placeholder="Поиск" v-model="search" >
            <input placeholder="Поиск" v-model="search2">
            <input type="submit"  class="btn">
            </form>
        </div> -->
             <input class="form-control" type="text" placeholder="введите номер" id="search-text" onkeyup="tableSearch()">
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
                    </thead>
                    <tbody>
                        <!-- <tr class="product"  v-for="(item) in weapons" v-show="item.ID.includes(search) && item.W_NUMBER.includes(search2)" v-bind:key="item._id"> -->
                    <tr class="product" v-for="(item) in weapons" v-bind:key="item.ID">

                      <td>{{item.ID}} </td>
                      <td>{{item.BRAND}} </td>
                      <td>{{item.TYPE1}} </td>
                      <td>{{item.TYPE2}} </td>
                      <td >{{item.W_NUMBER}} </td>
                      <td>{{item.THEFT_DATA}} </td>
                    </tr>
                    </tbody>
                  </table>
              <canvas id="myChart" width="400" height="400"></canvas> 
              
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
        BRAND:'',  
        TYPE1:'',
        TYPE2:'',
        isDonePr:'', 
        W_NUMBER:'',
        weapons:[]
        
    }},

    methods:{
       

},
    mounted: 
     function tableSearch() {
    var phrase = document.getElementById('search-text');
    var table = document.getElementById('info-table');
    var regPhrase = new RegExp(phrase.value, 'i');
    var flag = false;
    for (var i = 1; i < table.rows.length; i++) {
        flag = false;
        for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }

//                     this.weapons = allweapons;
// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',
//     data: {
//         labels: ['TYPE1', 'TYPE2'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [2,5]
//         }]
//     },
// });
            
        },
     
 });
</script>