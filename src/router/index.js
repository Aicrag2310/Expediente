import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Dashboard.vue'
import Expediente from '../views/expediente.vue'
import Tabulacion from '../views/tab_expediente.vue'
import Form_New_Pacient from '../components/paciente/form_new_paciente.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true } // se agrega la propiedad meta a la ruta que requiere autenticación
  },
  {
    path: '/expediente',
    name: 'Expediente',
    component: Expediente,
    meta: { requiresAuth: true } // se agrega la propiedad meta a la ruta que requiere autenticación
  },
  {
    path: '/tab',
    name: 'tab',
    component: Tabulacion,
    meta: { requiresAuth: true }
  },
  {
    path: '/new',
    name: 'paciente',
    component: Form_New_Pacient,
    meta: { requiresAuth: true }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token') // se verifica si el usuario está autenticado

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next('') // si el usuario no está autenticado, se redirige a la página de inicio de sesión
    } else {
      next() // si el usuario está autenticado, se permite el acceso a la ruta solicitada
    }
  } else {
    next() // si la ruta no requiere autenticación, se permite el acceso sin verificar si el usuario está autenticado
  }
})

export default router
