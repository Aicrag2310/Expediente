<template>
    <div>
      <AppBar :title="'Expedientes'"/>
      <Expediente/>
    </div>
  </template>
  
  <script>
  import AppBar from '@/components/Navbar.vue'
  import Expediente from '@/components/Expediente.vue'
  
  export default {
    components: {
        Expediente,
        AppBar
    },
  }
  </script>
  