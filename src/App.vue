<template>
  <div id="app">
    <div>
      <Navigation />
    </div>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  components: {
    Navigation
  }
}
</script>