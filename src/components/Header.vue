<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="container">
    <section class="header-top">
      <RouterLink :to="{ name: 'home' }"
        ><img src="../assets/img/logo.svg" alt="logo Le Bon Coin" />
      </RouterLink>
      <div>
        <button><font-awesome-icon :icon="['far', 'plus-square']" />Déposer une annonce</button>
        <div>
          <input placeholder="Rechercher sur leboncoin" />
          <button><font-awesome-icon :icon="['far', 'magnifying-glass']" /></button>
        </div>
      </div>
      <div>
        <p>icon</p>
        <p>Se connecter</p>
      </div>
    </section>
    <section class="header-bottom">
      <p>Immobilier</p>
      <p>·</p>
      <p>Véhicules</p>
      <p>·</p>
      <p>Locations de vacances</p>
      <p>·</p>
      <p>Emploi</p>
      <p>·</p>
      <p>Mode</p>
      <p>·</p>
      <p>Maison & Jardin</p>
      <p>·</p>
      <p>Famille</p>
      <p>·</p>
      <p>Electronique</p>
      <p>·</p>
      <p>Loisirs</p>
      <p>·</p>
      <p>Autres</p>
    </section>
  </main>
  <div class="border-bottom"></div>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  height: var(--header-height);
  padding: 15px 0px;
  gap: 20px;
}

.border-bottom {
  border-bottom: 1px grey solid;
}

section {
  display: flex;
}

.header-top {
  justify-content: space-between;
}

.header-top img {
  width: 150px;
}
.header-top > div {
  display: flex;
}

.header-top > div:first-of-type {
  display: flex;
  gap: 20px;
}

.header-top > div:nth-child(3) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.header-bottom {
  justify-content: space-between;
}

.header-top button:first-child {
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

.header-top > div > div > button {
  background-color: var(--orange-lbc);
  border-radius: 8px;
  border: none;
  color: black;
  font-size: 17px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
