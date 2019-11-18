import Vue from 'vue'
import VueRouter from 'vue-router'
import MainWeapons from './components/MainWeapons.vue'
import Chart from './components/Chart.vue'
import App from './components/App.vue'

const routes = [
   { path: '/', component: MainWeapons },
   { path: '/chart', component: Chart },
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
