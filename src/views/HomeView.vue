<template>
  <v-app id="inspire">
     <v-content>
        <v-container fluid fill-height>
           <v-layout align-center justify-center>
              <v-flex xs12 sm8 md4>
                 <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                       <v-toolbar-title>Login form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                       <v-form>
                          <v-text-field
                            v-model="usuario"
                             name="login"
                             label="Login"
                             type="text"
                             placeholder="Ingrese su usuario"
                          ></v-text-field>
                          <v-text-field
                            v-model="password" 
                             id="password"
                             placeholder="Ingrese su contraseña"
                             name="password"
                             label="Password"
                             type="password"
                          ></v-text-field>
                       </v-form>
                    </v-card-text>
                    <v-alert :type="tipo_error" v-if = "error">
                      {{msg_error}}
                    </v-alert>
                    <v-card-actions>
                       <v-spacer></v-spacer>
                       <v-btn  @click="login" color="primary" to="/">Login</v-btn>
                    </v-card-actions>
                    
                 </v-card>
              </v-flex>
           </v-layout>
        </v-container>
     </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
import router from "@/router/index.js"; // Importar el objeto router

export default {
  name: "LoginView",
  data() {
    return {
      usuario: "",
      password: "",
      error: "",
      msg_error: "",
      tipo_error: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("http://127.0.0.1:8000/login/", {
          username: this.usuario,
          password: this.password,
        });
        const token = response.data.token; // Obtener el token de la respuesta
        localStorage.setItem("token", token); // Guardar el token en el almacenamiento local
        this.tipo_error = "success";
        this.error = true;
        this.msg_error = "Correcto";
        router.push("/dashboard"); // Redirigir al usuario a la página de destino
      } catch (error) {
        this.tipo_error = "error";
        this.error = true;
        this.msg_error = "Usuario o contraseña incorrectas";
      }
    },
  },
};
</script>
