<template>
  <v-app-bar app style="background-color: #FD51B7; color: white;">
    <v-app-bar-nav-icon @click="drawer = !drawer" style=" color: white;"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-navigation-drawer  v-model="drawer" app temporary>
        <v-list>
          <template>
            <v-app-bar app style="background-color: #FD51B7; color: white;">
              <v-app-bar-nav-icon @click="drawer = !drawer" style=" color: white;"></v-app-bar-nav-icon>
              <v-toolbar-title>{{ title }}</v-toolbar-title>
              <v-spacer ></v-spacer>
              <v-navigation-drawer v-model="drawer" app temporary style="background-color: #FD51B7;">
                <v-list>
                  <v-list-item v-for="(item, i) in items" :key="i" @click="goTo(item.route)">
                    <v-list-item-icon>
                      <v-icon style="color:white; m">{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title style="color:white;  margin-left: 10px;">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-list>
                  <v-list-item @click="logout">
                    <v-list-item-icon>
                      <v-icon style="color:white;">mdi-logout</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title style="color:white;  margin-left: 10px;">Cerrar sesión</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-navigation-drawer>
            </v-app-bar>
          </template>
          
        </v-list>
      </v-navigation-drawer>
    </v-app-bar>
    
  </template>
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: 'My App',
      },
    },
    data() {
      return {
        drawer: false,
        items: [
          { title: "Inicio", icon: "mdi-home", route: "/dashboard" },
          { title: "Expediente", icon: "mdi-email", route: "/tab" },
          { title: "Contact", icon: "mdi-email", route: "/contact" },
        ],
      };
    },
    methods: {
      goTo(route) {
        this.$router.push(route);
        this.drawer = false;
      },
      logout() {
        // Eliminar token de autenticación almacenado en el cliente
        localStorage.removeItem('token');
        // Redirigir al usuario a la página de inicio de sesión
        this.$router.push('/');
      },
    },
  };
  </script>