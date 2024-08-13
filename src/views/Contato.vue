<template>
  <div>
    <PageLoading v-if="loading" />
    <transition>
    <div v-if="data">
      <h2 class="contato">{{data.titulo}}</h2>
      <p>{{ data.descricao }}</p>
      <ul>
        <li>
          <b>Email:</b>
          {{ data.contato.email }}
        </li>
        <li>
          <b>Telefone:</b>
          {{ data.contato.telefone }}
        </li>
        <li>
          <b>Endereço:</b> 
          {{ data.contato.endereco }}
        </li>
      </ul>
    </div>
  </transition>
  </div>
  
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: 'contatoView',
  mixins: [fetchData],
  created() {
    this.fetchData("/contato");
  }
}
</script>

<style>

</style>