<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const offersList = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers?populate=*',
    )
    console.log(data)
    offersList.value = data.data
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
  <header class="container">
    <h1>Des millions de petites annonces et autant d'occasions de se faire plaisir</h1>
    <div class="banner">
      <img src="../assets/img/onde-corail.svg" alt="ondes corail" />
      <div>
        <p>C'est le moment de vendre</p>
        <button><font-awesome-icon :icon="['far', 'plus-square']" />Déposer une annonce</button>
      </div>
      <img src="../assets/img/feuille-bleue.svg" alt="feuille bleue" />
    </div>
  </header>

  <main class="container">
    <div v-for="offer in offersList" :key="offer.id">
      <RouterLink :to="{ name: 'offer', params: { id: offer.id } }">
        <div class="identity">
          <p>{{ offer.attributes.owner.data.attributes.username }}</p>
        </div>
        <div v-for="pictures in offer.attributes.pictures.data.slice(0, 1)" :key="pictures.id">
          <img :src="pictures.attributes.url" />
        </div>
        <p class="title">{{ offer.attributes.title }}</p>
        <p class="title">{{ offer.attributes.price }} €</p>
        <p class="date">{{ formatDate(offer.attributes.updatedAt) }}</p>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
/* TOP */

h1 {
  margin: 30px 0px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
}

.banner {
  background-color: #fee9dd;
  border-radius: 10px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  margin-bottom: 30px;
}

.banner > div {
  display: flex;
  align-items: center;
  gap: 20px;
}
.banner p {
  font-size: 20px;
  font-weight: bold;
}

.banner button {
  background-color: var(--orange-lbc);
  border-radius: 8px;
  border: none;
  color: white;
  font-size: 17px;
  font-weight: bold;
  padding: 8px 10px;
  display: flex;
  gap: 10px;
  align-items: center;
}

/* GRILLE CENTRALE */

a {
  color: black;
}

main {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow: hidden;
}

main > div {
  width: 240px;
  margin-bottom: 30px;
}

.identity {
  font-weight: bold;
}

main img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
  margin: 10px 0px;
}

.title {
  font-weight: bold;
  font-size: 18px;
  line-height: 30px;
}

.date {
  margin-top: 10px;
  font-size: 12px;
  color: grey;
}
</style>
