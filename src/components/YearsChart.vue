
<script>
import Vue from 'vue'
import VueCharts from 'vue-chartjs'
import { Bar, Line } from 'vue-chartjs'
  
export default {
  extends: Bar,
  mounted () {
       this.weapons = allweapons;
       let wpLabels = this.weapons.map(function(d) {return d.THEFT_DATA});
       let wpData = this.weapons.map(function(d) {return d.TYPE2});
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: wpLabels,
      datasets: [
        {
          label: 'Дата/тип зброї',
          backgroundColor: '#f87979',
          data: wpData
        }
      ]
    })
  }
}
</script>