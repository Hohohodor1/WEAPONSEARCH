import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
var vm = new Vue({
    el: '#MainWeapons',
    data: {
        usd: 0,
        uah: 0,
        grn: 0,
        obl:'',
        mst:'',
        vid:'',  
        name:'',
        
        isDonePr:'', 
        group:'',
        students:[]
        
    },

    methods:{
        hope: function() {
            Vue.axios.post("http://46.101.212.195:3000/students",{
                name: this.name,
                group: this.group,
                isDonePr: false
            })       
            .then((response) =>  {   
        
            console.log(response.data)
        
        } )
                
        
    },

        DlStudentById: function(st){

            Vue.axios.delete("http://46.101.212.195:3000/students/"+st).then(response => {
                this.students = this.students.filter(Element => {
                    return Element._id != st;

                });
            });
        

    },  

            UpStudents: function()
            {
                Vue.axios.get("http://46.101.212.195:3000/students").then((response) =>
            {   
                this.students = response.data;
                console.log(response.data);
                
            }
          ); 
},
},
    mounted: function() {
                Vue.axios.get("http://46.101.212.195:3000/students").then((response) =>
            {   
                this.students = response.data;
                console.log(response.data);
                
            } ); 
                    
            
            
         }
     
});