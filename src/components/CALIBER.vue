<script>
import Vue from 'vue'
import VueCharts from 'vue-chartjs'
import { Bar, Line } from 'vue-chartjs'
  
export default {
  extends: Bar,
  mounted () {
       this.weapons = allweapons;
       let allYears = this.weapons.map(function(d) {return d.CALIBER});
       allYears.sort();

       var tmp = allYears[0];
       var countOfLostWeapon = new Array();
       var counter = 0;
       for(var i=0; i<allYears.length; i++)
       {
          if(allYears[i] == tmp)
          {
            countOfLostWeapon[counter]++;
          }
          else
          {
            countOfLostWeapon.push(0);
            tmp = allYears[i];
            counter++;
            countOfLostWeapon[counter]++;
          }
       }
       let wpLabels2 = [...new Set(allYears)];
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: wpLabels2,
      datasets: [
        {
          label: 'Дата/тип зброї',
          backgroundColor:'#f87979',
          data: countOfLostWeapon //[16,17,34,13,12,88,6,4,3,1,9]
        }
      ]
    })
  }
}
</script>