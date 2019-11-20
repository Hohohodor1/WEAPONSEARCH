
<script>
import Vue from 'vue'
import VueCharts from 'vue-chartjs'
import { Bar, Line } from 'vue-chartjs'
  
export default {
  extends: Bar,
  mounted () {
       this.weapons = allweapons;
       var wpLabels = this.weapons.map(function(d) {return d.BRAND});
       var wpData = this.weapons.map(function(d) {return d.CALIBER});
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: wpLabels,
      datasets: [
        {
          label: 'Колібр зброї',
          backgroundColor: '#f87979',
          data: wpData
        }
      ]
    })
  }
}
</script>