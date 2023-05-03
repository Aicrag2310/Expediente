<template>
<v-app>
  <v-form @submit.prevent="submit">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
              v-model="pacientes.Nombre"
              label="Nombre"
              required
              outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
              v-model="pacientes.Edad"
              label="Edad"
              required
              type="number"
              outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>

        <v-col cols="12" md="6">
          <v-select
              v-model="pacientes.Genero"
              :items="genders"
              label="Género"
              required
              outlined
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
              v-model="pacientes.Estado_Civil"
              label="Estado Civil"
              required
              type="text"
              outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
              v-model="pacientes.Ocupacion"
              label="Ocupación"
              required
              type="text"
              outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
              v-model="pacientes.Domicilio"
              label="Domicilio"
              required
              type="text"
              outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
              v-model="pacientes.Telefono"
              label="Telefono"
              required
              type="number"
              outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
              v-model="pacientes.Correo_Electronico"
              label="Correo electronico (Opcional)"
              type="text"
              outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
              v-model="pacientes.Numero_identificacion"
              label="Número de identificación del imss"
              type="text"
              outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn type="submit" color="primary" class="mt-6">Registrar</v-btn>
    </v-container>
  </v-form>
</v-app>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      pacientes:
        {
        Nombre: '',
        Edad: '',
        Genero: '',
        Estado_Civil:'',
        Ocupacion:'',
        Domicilio:'',
        Telefono: '',
        Correo_Electronico: '',
        Numero_identificacion: ''
      },
      genders: ['Masculino', 'Femenino', 'No binario']
    }
  },
  methods: {
    async submit() {
      console.log("Que es esto ",this.pacientes)
      try {
        const response = await axios.post("http://127.0.0.1:8000/pacientes/", this.pacientes)
        location.reload()
      } catch (error) {
        console.error("Ocurrió un error:", error.response.data)
      }
    }
  }
}
</script>

<style>
.v-input__icon {
  color: #757575;
}
.v-text-field--outlined .v-input__control .v-input__slot:before {
  border-color: #757575;
}
.v-input__control.v-input__control--outlined .v-input__slot:after {
  border-bottom-color: #757575;
}
.v-input__control.v-input__control--outlined.v-input--has-state:before,
.v-input__control.v-input__control--outlined.v-input--is-focused:before {
  border-color: #2196f3;
}
.v-btn--has-bg {
  background-color: #2196f3;
}
</style>
