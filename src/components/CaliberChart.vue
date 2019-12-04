<script>
import Vue from "vue";
import VueCharts from "vue-chartjs";
import { Bar, Line } from "vue-chartjs";

export default {
  extends: Bar,
  mounted() {
    this.weapons = allweapons;
    let allYears = this.weapons.map(function(d) {
      return d.CALIBER });
    allYears.sort();

    //  var tmp = allYears[0];
    var countOfLostWeapon = new Array();
    var counter = 0;

    console.table(allYears);

    var tempArray = new Array();


    for (var i = 0; i < allYears.length; i++) {
      // if(allYears[i] == tmp)
      // {
      //   counter++;
      // }countOfLostWeapon
      // else
      // {
      //
      //tmp = allYears[i];
      // counter++;
      // countOfLostWeapon[counter]++;
      // }



    if(tempArray.length > 0)
      if (tempArray.includes(allYears[i])) 
        continue;




      var countWeaponsCurrentCounter = this.GetCountWeaponsByYears(i, allYears);
      countOfLostWeapon.push(countWeaponsCurrentCounter);

      tempArray.push(allYears[i]);
    }

    console.table(countOfLostWeapon);

    let wpLabels2 = [...new Set(allYears)];
    this.renderChart({
      labels: wpLabels2,
      datasets: [
        {
          label: "Дата/кількість зброї",
          backgroundColor: "#f87979",
          data: countOfLostWeapon
        }
      ]
    });
  },
  methods: {
    GetCountWeaponsByYears: function(index, array) {
      var count = 0;

      for (var i = 0; i < array.length; i++) 
        if (array[index] == array[i]) 
            count++;

        return count;
    }
  }
};
</script>