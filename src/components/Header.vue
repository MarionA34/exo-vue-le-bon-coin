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
          <button><font-awesome-icon :icon="['fas', 'search']" /></button>
        </div>
      </div>
      <div>
        <font-awesome-icon :icon="['far', 'user']" />
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

section {
  display: flex;
}

/* HEADER BOTTOM */

.header-top {
  justify-content: space-between;
}

.header-top img {
  width: 150px;
}
.header-top > div {
  display: flex;
}

/* BLOC CENTRAL */

.header-top > div:first-of-type {
  display: flex;
  gap: 20px;
}

/* BLOC CENTRAL - DEPOSER UNE ANNONCE
 */
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

/* BLOC CENTRAL - RECHERCHER
 */

.header-top > div > div {
  display: flex;
  align-items: center;
  background-color: rgba(243, 247, 254, 0.93);
  padding: 5px 10px;
  border-radius: 8px;
}

.header-top input {
  background: unset;
  border: none;
  font-size: 17px;
  width: 250px;
}

.header-top > div > div > button {
  background-color: var(--orange-lbc);
  border-radius: 8px;
  border: none;
  color: black;
  font-size: 14px;
  padding: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* SE CONNECTER */

.header-top > div:nth-child(3) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 12px;
}

.header-top > div:nth-child(3) > svg {
  font-size: 16px;
}

/* HEADER BOTTOM */

.header-bottom {
  justify-content: space-between;
}
.border-bottom {
  border-bottom: 1px grey solid;
}
</style>
