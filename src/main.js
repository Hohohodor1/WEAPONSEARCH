import Vue from 'vue'
import VueRouter from 'vue-router'
import MainWeapons from './components/MainWeapons.vue'
import Chart from './components/Chart.vue'
import CaliberChart from './components/CaliberChart.vue'
import YearsChart from './components/YearsChart.vue'
import App from './components/App.vue'
import Info from './components/Info.vue'


const routes = [
   { path: '/', component: MainWeapons },
   { path: '/chart', component: Chart },
   { path: '/yearschart', component: YearsChart },
   { path: '/caliberchart', component: CaliberChart },
   { path: '/info', component: Info },
]

const router = new VueRouter({
   routes
})
Vue.use(VueRouter)
new Vue({
   render: h => h(App),
   el: '#MainWeapons',
   router 

})
