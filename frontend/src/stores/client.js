import { clientInterface } from '@/interfaces/client'
import { defineStore } from 'pinia'

// si je veux interragir avec un autre store, il suffit de l'importer

export const useClientStore = defineStore('client', {
  state: () => ({
    items: null, //la liste des clients utilisées dans ClientsView
    item: null, //formulaire d'édition utilisé dans CreateClientillView
    loading: false // un simple boolean pour indiquer le chargement des données
  }),
  getters: {},
  actions: {
    // on charge la liste des clients depuis la route d'api GET http://127.0.0.1/clients
    async getItems() {
      console.log('fetch clients')
      this.loading = true
      try {
        const response = await this.$http.get('/clients')
        this.items = response.data
        this.loading = false
      } catch (error) {
        console.error(error)
        this.loading = false
      }
    },

    async setItem(id) {
      if (id === 'new') {
        // si c'est une nouveau client, j'utilise un objet tout neuf de mon interface d'objet pour un client
        this.item = { ...clientInterface }
      } else {
        // sinon, j'utilise les données du client existante dans la liste des clients
        this.loading = true
        try {
          const response = await this.$http.get('/clients/' + id)
          this.item = response.data
          this.loading = false
        } catch (error) {
          console.error(error)
          this.loading = false
        }
      }
    },

    // mise à jour d'un client
    async updateItem(form) {
      this.loading = true
      try {
        const response = await this.$http.patch('/clients/' + form.id, form)
        await this.getItems();
        console.log(response.data)
        this.loading = false
      } catch (error) {
        console.error(error)
        this.loading = false
      }
    },
    // création d'une nouveau client
    async createItem(form) {
      this.loading = true
      try {
        const response = await this.$http.post('/clients', form)
        await this.getItems();
        console.log(response.data)
        this.loading = false
      } catch (error) {
        console.error(error)
        this.loading = false
      }
    },

    // suppression d'un client
    async deleteItem(id) {
      this.loading = true
      try {
        const response = await this.$http.delete('/clients/' + id)
        await this.getItems();
        console.log(response.data)
        this.loading = false
      } catch (error) {
        console.error(error)
        this.loading = false
      }
    }
  }
})