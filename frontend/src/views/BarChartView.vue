<template>
    <div class="doughnut-chart">
      <Doughnut v-if="loaded" :data="chartData" />
    </div>
</template>
  
<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

export default {
  name: 'DoughnutChart',
  components: { Doughnut },
  props: {
    bills: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    loaded: false,
    chartData: {
      labels: ['Factures 2023'],
      datasets: [
        {
          label: 'Nombre de Factures',
          backgroundColor: ['#f87979'],
          data: [0]
        }
      ]
    }
  }),
  mounted() {
    this.prepareChartData()
  },
  methods: {
    prepareChartData() {
      const year2023Bills = this.bills.filter(bill => new Date(bill.date).getFullYear() === 2023)
      this.chartData.datasets[0].data[0] = year2023Bills.length
      this.loaded = true
    }
  }
}
</script>

<style scoped>
  .doughnut-chart {
    max-width: 200px;
    margin: auto;
  }
</style>
