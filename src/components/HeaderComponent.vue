<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/">Techno Cursos</router-link>
      </div>
      <ul>
        <li>
          <router-link to="/cursos">Cursos</router-link></li>
        <li>
          <router-link to="/contato">Contato</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default{
  name: "headerComp"
}
</script>

<style scoped>
header{
  background-color: #243;
}

header a{
  color: #fff;
}

ul li{
  display: inline-block;
} 

li a {
  padding: 0 10px;
  margin-left: 10px;
}

a.router-link-exact-active{
    color: #4b8;
  }

nav{
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-content: space-between;
  padding: 20px
}
.logo{
  flex:1;
}
.logo a{
  color:#fff;
  font-size: 1.2rem;
}
</style>