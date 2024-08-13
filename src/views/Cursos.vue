<template>
  <div>
    <PageLoading v-if="loading" />
    <transition>
      <div v-if="data" class="conteudo">
        <div>
          <h2 class="cursos">{{data.titulo}}</h2>
          <p>{{ data.descricao }}</p>
        </div>
        <ul>
          <li v-for="curso in data.cursos" :key="curso.id">
            <router-link :to="{name: 'curso',params: {curso: curso.id}}">
              <h2>{{ curso.nome }} - {{  curso.totalAulas }} aulas | {{ curso.horas}} horas</h2>
            </router-link>
            <p>{{ curso.descricao }}</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: 'cursosView',
  mixins: [fetchData],
  created() {
    this.fetchData("/cursos");
  }
}
</script>