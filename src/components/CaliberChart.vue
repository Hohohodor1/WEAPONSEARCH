<script>
import Vue from "vue";
import VueCharts from "vue-chartjs";
import { Bar, Line } from "vue-chartjs";

export default {
  extends: Bar,
  mounted() {
    this.weapons = allweapons;
    let allCalibers = this.weapons.map(function(d) {
      return d.CALIBER });
    allCalibers.sort();
    var countOfLostWeapon = new Array();
    var counter = 0;

    console.table(allCalibers);

    var tempArray = new Array();


    for (var i = 0; i < allCalibers.length; i++) {
      // if(allCalibers[i] == tmp)
      // {
      //   counter++;
      // }countOfLostWeapon
      // else
      // {
      //
      //tmp = allCalibers[i];
      // counter++;
      // countOfLostWeapon[counter]++;
      // }



    if(tempArray.length > 0)
      if (tempArray.includes(allCalibers[i])) 
        continue;

      var countWeaponsCurrentCounter = this.GetCountWeaponsByCalibers(i, allCalibers);
      countOfLostWeapon.push(countWeaponsCurrentCounter);

      tempArray.push(allCalibers[i]);
    }

    console.table(countOfLostWeapon);

    let wpLabels2 = [...new Set(allCalibers)];
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
    GetCountWeaponsByCalibers: function(index, array) {
      var count = 0;

      for (var i = 0; i < array.length; i++) 
        if (array[index] == array[i]) 
            count++;

        return count;
    }
  }
};
</script>