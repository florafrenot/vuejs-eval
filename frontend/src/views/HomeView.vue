<template>
  <div class="bills">
    <div class="row border-bottom pb-3 mb-3">
      <div class="col">
        <h2>Dashboard</h2>
      </div>
      <div class="col text-end">
        <button @click="$router.push({ name: 'create-bill' })" class="btn btn-outline-primary m-2">
          <i class="fa-solid fa-plus-circle me-2" />
          Ajouter une facture
        </button>
        <button @click="$router.push({ name: 'create-client' })" class="btn btn-outline-success m-2">
          <i class="fa-solid fa-plus-circle me-2" />
          Ajouter un client
        </button>
      </div>
    </div>

    <!-- je rajoute le diagramme -->
    <DoughnutChart v-if="!loading && bills" :bills="bills" />
    <AppDebug :datas="bills" />
  </div>
</template>

<script>
import BillTableRow from '@/components/tables/BillTableRow.vue'
import DoughnutChart from '@/views/BarChartView.vue'
import TableList from '@/components/tables/TableList.vue'
import { useBillStore } from '@/stores/bill'
import { mapActions, mapState } from 'pinia'
export default {
  components: {
    DoughnutChart,
    TableList,
    BillTableRow
  },
  computed: {
    ...mapState(useBillStore, {
      bills: 'items',
      loading: 'loading'
    })
  },
  async mounted() {
    await this.getBills()
  },
  methods: {
    ...mapActions(useBillStore, {
      getBills: 'getItems'
    })
  }
}
</script>
