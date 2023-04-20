<template>
  <v-data-table
  :headers="headers"
  :items="filteredPacientes"
  :search="search"
  :loading="loading"
  :pagination.sync="pagination"
  :items-per-page="10"
  :footer-props="{
    itemsPerPageOptions: [10, 20, 50, { text: 'Todos', value: -1 }],
    showCurrentPage: true,
    showFirstLastPage: true,
    align: 'center',
  }"
  hide-default-footer
  class="elevation-1"
>
    <template v-slot:top>
      <v-toolbar flat color="primary">
        <v-toolbar-title>Identificación del paciente</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Buscar"
          single-line
          hide-details
        ></v-text-field>
      </v-toolbar>
    </template>
    <template v-slot:item="{ item }">
      <tr>
        <td>{{ item.id }}</td>
        <td>{{ item.Nombre }}</td>
        <td>{{ item.Edad }}</td>
        <td>{{ item.Genero }}</td>
        <td>{{ item.Estado_Civil }}</td>
        <td>{{ item.Ocupacion }}</td>
        <td>{{ item.Domicilio }}</td>
        <td>{{ item.Telefono }}</td>
        <td>{{ item.Correo_Electronico }}</td>
        <td>{{ item.Numero_identificacion }}</td>
        <td>
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="primary"
          >
            <v-icon dark>mdi-book-open-variant</v-icon>
          </v-btn>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      headers: [
        { text: 'Id', value: 'id' },  
        { text: 'Nombre', value: 'nombre' },  
        { text: 'Edad', value: 'edad' },
        { text: 'Género', value: 'genero' },
        { text: 'Estado civil', value: 'estadoCivil' },
        { text: 'Ocupación', value: 'ocupacion' },
        { text: 'Domicilio', value: 'domicilio' },
        { text: 'Teléfono', value: 'telefono' },
        { text: 'Correo electrónico', value: 'correoElectronico' },
        { text: 'Número de identificación', value: 'numIdentificacion' },
        { text: 'Consulta', value: 'consulta' },
      ],
      pacientes: [],
      loading: false,
      search: '',
      pagination: {
        sortBy: 'nombre', // cambiar 'id' a 'nombre'
        descending: false,
      },
    };
  },
  created() {
    this.fetchData();
  },
  computed: {
    filteredPacientes() {
      return this.pacientes.filter(paciente => {
        return Object.keys(paciente).some(key =>
          String(paciente[key]).toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
  },
  methods: {
    fetchData() {
      this.loading = true;
      axios
        .get('http://127.0.0.1:8000/pacientes/')
        .then(response => {
          this.pacientes = response.data;
          console.log(response.data)
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
