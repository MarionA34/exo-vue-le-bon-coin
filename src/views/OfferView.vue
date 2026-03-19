<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

import { ref, onMounted } from 'vue'
import axios from 'axios'

const offerInfos = ref(null)

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers/${props.id}?populate=*`,
    )
    console.log(data)
    offerInfos.value = data
  } catch (error) {
    console.log(error)
  }
})

const date = ref('')

const formatDate = (isoDate) => {
  return new Date(isoDate).toLocaleDateString('fr-FR')
}
</script>
<template>
  <p class="charging" v-if="!offerInfos">Chargement en cours</p>

  <main v-else class="container">
    <section class="bloc-left">
      <div>
        <img :src="offerInfos.data.attributes.pictures.data[0].attributes.url" alt="first image" />
      </div>
      <div>
        <h1>{{ offerInfos.data.attributes.title }}</h1>
        <p class="price">{{ offerInfos.data.attributes.price }} €</p>
        <p class="date">{{ formatDate(offerInfos.data.attributes.updatedAt) }}</p>
      </div>
      <div class="description">
        <h2>Description</h2>
        <p v-if="offerInfos.data.attributes.description">
          {{ offerInfos.data.attributes.description }}
        </p>
      </div>
      <div class="address">
        <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
        <p>Agon-Coutainville (50230)</p>
      </div>
    </section>
    <section class="bloc-right">
      <div>
        <div>
          <div class="identity">
            <p>avatar</p>
            <h2>{{ offerInfos.data.attributes.owner.data.attributes.username.toUpperCase() }}</h2>
          </div>
          <p class="dni" v-if="offerInfos.data.attributes.owner.data.attributes.confirmed">
            <font-awesome-icon :icon="['fas', 'check-double']" />
            Pièce d'identité vérifiée
          </p>

          <div class="delay">
            <font-awesome-icon :icon="['far', 'clock']" />
            <p>Répond généralement en 1 heure</p>
          </div>
        </div>
        <div class="separator"></div>
        <div class="buttons">
          <button>Acheter</button>
          <button>Message</button>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  margin-top: 30px;
  margin-bottom: 50px;
}

.charging {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  margin-top: 50px;
}

/* BLOC LEFT */

section:first-of-type {
  width: 70%;
}

.bloc-left > div:first-of-type {
  height: 350px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
h1 {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
}

.price,
h2 {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
}

.date {
  font-size: 14px;
  color: grey;
  margin-bottom: 50px;
}

.description {
  padding: 20px 0px;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
}

.address {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

/* BLOC RIGHT  */

section:last-of-type {
  flex: 1;
}

section:last-of-type > div:first-child {
  box-shadow: 0 0 3px lightgrey;
  padding: 15px;
  border-radius: 5px;
}

.identity {
  display: flex;
  gap: 10px;
}

.dni {
  font-size: 12px;
  display: inline;
  color: rgb(135, 80, 26);
  border-radius: 50px;
  background-color: #fee9dd;
  padding: 3px;
  font-weight: bold;
}

.dni svg {
  margin-right: 5px;
}

.delay {
  margin-top: 20px;
  margin-bottom: 50px;
  font-size: 14px;
  display: flex;
}

.delay svg {
  margin-right: 5px;
}

.separator {
  border-top: lightgray 1px solid;
}

.buttons {
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.buttons button {
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  border-radius: 10px;
  border: none;
}

.buttons button:first-of-type {
  background-color: var(--orange-lbc);
}

.buttons button:last-of-type {
  background-color: #094171;
}
</style>
