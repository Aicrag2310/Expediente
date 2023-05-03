<template>
  <v-card>
    <v-card-title>
      Pacientes
      <v-spacer></v-spacer>
      <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
    >
      <template v-slot:item.Nueva_Columna="{ item }">
        <v-btn style="background-color: #941c01" @click="deletePaciente(item.id)">Eliminar</v-btn>
        <v-btn style="background-color: #ffc02f" @click="editPaciente(item.id)">Actualizar</v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data () {
    return {
      search: '',
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Nombre', value: 'Nombre' },
        { text: 'Edad', value: 'Edad' },
        { text: 'Género', value: 'Genero' },
        { text: 'Estado civil', value: 'Estado_Civil' },
        { text: 'Ocupación', value: 'Ocupacion' },
        { text: 'Domicilio', value: 'Domicilio' },
        { text: 'Teléfono', value: 'Telefono' },
        { text: 'Correo electrónico', value: 'Correo_Electronico' },
        { text: 'Número de identificación', value: 'Numero_identificacion' },
        { text: 'Acciones', value: 'Nueva_Columna', sortable: false }


      ],
      desserts: [      ],
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      axios
          .get('http://127.0.0.1:8000/pacientes/')
          .then(response => {
            this.desserts = response.data;
            console.log(response.data)
          })
          .finally(() => {
            this.loading = false;
          });
    },
    async deletePaciente(paciente_id) {
      try {
        const response = await axios.delete(`http://127.0.0.1:8000/pacientes/${paciente_id}/`);
        console.log(response);
        this.fetchData();
      } catch (error) {
        console.error("Ocurrió un error:", error.response.data)
      }
    },
  },
}
</script>


