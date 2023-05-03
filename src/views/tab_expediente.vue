<template>
  <div>
    <AppBar :title="'Expedientes'"/>
    <v-tabs v-model="tab" color="blue" style="margin-top: -5%;" background-color="cyan">
      <v-tab v-for="(item, index) in items" :key="index" color="blue">{{ item }}</v-tab>
      <v-tab-item v-for="(item, index) in items" :key="index">
        <v-card flat v-if="index === 0">
          <Expediente/>
        </v-card>
        <v-card flat v-if="index === 1">
          <form_new_paciente/>
        </v-card>
        <v-card flat v-else>
          <v-card-text>
            <p>Content for {{ item }} tab goes here.</p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>

</template>

<script>
import AppBar from '@/components/Navbar.vue'
import Expediente from '@/components/Expediente.vue'
import form_new_paciente from '@/components/paciente/form_new_paciente.vue'
export default {
  components: {
        Expediente,
        AppBar,
        form_new_paciente
    },

  data() {

    return {
      tab: null,
      items: ['Pacientes', 'Agregar nuevo paciente', 'Tab 3','Tab 4']
    }
  }
}
</script>

<style>
</style>
