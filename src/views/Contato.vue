<template>
  <div>
    <PageLoading v-if="loading" />
    <transition>
    <div v-if="data">
      <h2 class="contato">Contato</h2>
      <p>{{ data }}</p>
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