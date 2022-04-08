<template>
  <div id="app">
    <nav class="navbar navbar-dark navbar-expand-lg fixed-top" id="mainNav">
      <div class="container">
        <router-link to="/"> <a class="navbar-brand">V8</a> </router-link
        ><button
          data-toggle="collapse"
          data-target="#navbarResponsive"
          class="navbar-toggler"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <!-- MENU DE NAVEGACION -->
          <ul class="nav navbar-nav ml-auto" id="menu-v8">
            <li class="nav-item" role="presentation">
              <router-link to="/">portada</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link to="/sobremi">sobre mí</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link to="/contacto">contacto</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link to="/post/1">último post</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- ROUTER VIEW QUE CARGARÁ LAS VISTAS (INICIO, SOBRE MÍ, CONTACTO, ETC.) -->
    <transition name="stepview">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#menu-v8 a {
  text-shadow: 1px 1px #000;
}

.stepview-enter-active,
.stepview-leave-active {
  transition: opacity 1s;
}
.stepview-enter,
.stepview-leave-to {
  opacity: 0.5;
}
</style>
