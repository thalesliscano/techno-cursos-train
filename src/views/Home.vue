<template>
  <div class="home">
    <PageLoading v-if="loading" />
    <transition>
      <div v-if="data" class="conteudo">
        <h2>Sobre a {{  data.titulo }}</h2>
        <p>{{ data.descricao }}</p>
        <router-link  class="btn-cursos" tag="button" to="/cursos">Cursos</router-link>
        <div>
          <h2>Avaliações</h2>
          <ul>
            <li v-for="avaliacao in data.avaliacoes" :key="avaliacao.nome">
              <p>{{ avaliacao.nome }}</p>
              <p>{{ avaliacao.descricao }}</p>
            </li>
          </ul>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: 'homeView',
  mixins: [fetchData],
  created() {
    this.fetchData("/home");
  }
}
</script>

<style>
.btn-cursos{
  border: none; 
  background: #4b8;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  padding: 15px 20px;
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 2px rgba(0,0,0,0.1);
  font-family: "Avenir", Arial, Helvetica, sans-serif;
}
</style>
