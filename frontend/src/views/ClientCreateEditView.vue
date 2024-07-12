<template>
  <div>
    <div class="client" v-if="!loading && client">
      <div class="row border-bottom pb-3 mb-3">
        <div class="col">
          <h1 v-if="isNewClient" class="h3">
            <i class="fa-solid fa-angle-down me-2"/>Créer un client
          </h1>
          <h1 v-else class="h3"><i class="fa-solid fa-angle-down me-2"/>Editer un client</h1>
        </div>
        <div v-if="!isNewClient" class="col text-end">
          <button @click="onDeleteClient(client)" class="btn btn-outline-danger">
            <i class="fa-solid fa-trash me-2"/>
            Supprimer le client
          </button>
        </div>
      </div>

      <div class="alert alert-danger my-3" v-if="error">Un champ requière votre attention</div>

      <!-- Enregistrer le contact -->
      <h2 class="mt-5">Contact</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="form-floating mb-3">
            <input
              type="text"
              name="firstName"
              id="firstName"
              v-model="client.firstName"
              class="form-control"
              placeholder="Prénom"
              :class="{ 'is-invalid': !client.firstName }"
            />
            <label for="firstName" class="form-label">Prénom</label>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-floating mb-3">
            <input
              type="text"
              name="lastName"
              id="lastName"
              v-model="client.lastName"
              class="form-control"
              placeholder="Nom"
              :class="{ 'is-invalid': !client.lastName }"
            />
            <label for="lastName" class="form-label">Nom</label>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-floating mb-3">
            <input
              type="date"
              name="creationDate"
              id="creationDate"
              v-model="client.creationDate"
              class="form-control"
              placeholder="Date de création"
              format="yyyy-MM-dd"
            />
            <label for="creationDate" class="form-label">Date d'ajout</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-floating mb-3">
            <input
              type="text"
              name="function"
              id="function"
              v-model="client.function"
              class="form-control"
              placeholder="Fonction"
              :class="{ 'is-invalid': !client.function }"
            />
            <label for="function" class="form-label">Fonction</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-floating mb-3">
            <input
              type="tel"
              name="telephone"
              id="telephone"
              v-model="client.telephone"
              class="form-control"
              placeholder="Téléphone"
              :class="{ 'is-invalid': !client.telephone }"
            />
            <label for="numeroTelephone" class="form-label">Téléphone</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-floating mb-3">
            <input
              type="email"
              name="email"
              id="email"
              v-model="client.email"
              class="form-control"
              placeholder="Email"
              :class="{ 'is-invalid': !client.email }"
            />
            <label for="email" class="form-label">Email</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-floating mb-3">
            <input
              type="text"
              name="companyName"
              id="companyName"
              v-model="client.companyName"
              class="form-control"
              placeholder="Entreprise"
              :class="{ 'is-invalid': !client.companyName }"
            />
            <label for="companyName" class="form-label">Entreprise</label>
          </div>
        </div>
      </div>

      <!-- Les coordonnées du client -->
      <h2 class="mt-5">Coordonnées</h2>
      <div class="row">
        <div class="col-md-12">
          <div class="form-floating mb-3">
            <input
              type="text"
              name="adresse"
              id="adresse"
              v-model="client.adresse"
              class="form-control"
              placeholder="Adresse1"
              :class="{ 'is-invalid': !client.adresse }"
            />
            <label for="adresse" class="form-label">Adresse</label>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-floating mb-3">
            <input
              type="text"
              name="adresseSeconde"
              id="adresseSeconde"
              v-model="client.adresse2"
              class="form-control"
              placeholder="Adresse2"
            />
            <label for="adresseSeconde" class="form-label">Adresse 2</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-floating mb-3">
            <input
              type="text"
              name="codePostal"
              id="function"
              v-model="client.codePostal"
              class="form-control"
              placeholder="Code Postal"
              :class="{ 'is-invalid': !client.codePostal }"
            />
            <label for="codePostal" class="form-label">Code Postal</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-floating mb-3">
            <input
              type="text"
              name="ville"
              id="ville"
              v-model="client.ville"
              class="form-control"
              placeholder="ville"
              :class="{ 'is-invalid': !client.ville }"
            />
            <label for="ville" class="form-label">Ville</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="form-floating mb-3">
            <input
              type="text"
              name="pays"
              id="pays"
              v-model="client.pays"
              class="form-control"
              placeholder="pays"
              :class="{ 'is-invalid': !client.pays }"

            />
            <label for="adresse" class="form-label">Pays</label>
          </div>
        </div>
      </div>


      <!-- Bouton de validation -->
      <p class="text-end">
        <button
          @click="onSave()"
          :disabled="formInvalid"
          class="btn btn-outline-primary btn-lg px-5"
        >
          <i class="fa-solid fa-save me-2" />Enregistrer
        </button>
      </p>

      <AppDebug :datas="client" />
    </div>
    <div v-else>loading...</div>
  </div>
</template>
  
  <script>
  import { useClientStore } from '@/stores/client'
  import { mapActions, mapState, mapWritableState } from 'pinia'
  export default {
    props: {
      id: {
        type: String,
        default: 'new'
      }
    },
    data() {
      return {
        error: false
      }
    },
    mounted() {
      this.setClient(this.id);
      if (this.isNewClient) {
      this.client.creationDate = new Date().toISOString().slice(0, 10)
    }
    },
    computed: {
      ...mapState(useClientStore, {
        loading: 'loading'
      }),
      ...mapWritableState(useClientStore, {
        client: 'item'
      }),
      isNewClient() {
        return this.id === 'new'
      },
      //mes champs obligatoires
      formInvalid() {
        return (
          !this.client ||
          !this.client.firstName ||
          !this.client.lastName ||
          !this.client.companyName ||
          !this.client.email ||
          !this.client.adresse ||
          !this.client.codePostal ||
          !this.client.pays ||
          !this.client.ville ||
          !this.client.function       
        )
      },
    },
    methods: {
      ...mapActions(useClientStore, {
        setClient: 'setItem',
        updateClient: 'updateItem',
        createClient: 'createItem',
        deleteClient: 'deleteItem'
      }),
  
      onDeleteClient() {
        this.deleteClient(this.id)
        this.$router.push({ name: 'clients' })
      },

      onSave() {
        // si j'ai une erreur dans le formulaire
        if (this.formInvalid) {
          // gestion des erreurs ici
          this.error = true
        } else {
          this.error = false
          // on appelle la méthode de sauvegarde de la donnée du store
          if (this.isNewClient) {
            console.log('create', this.client)
            this.createClient(this.client)
          } else {
            console.log('update', this.client)
            this.updateClient(this.client)
          }
          // on revient sur la page précédente
          this.$router.push({ name: 'clients' })
        }
      }
    },
  }
  </script>