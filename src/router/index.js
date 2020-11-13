import { createRouter, createWebHistory } from 'vue-router'
import Lista from '@/components/LibroListar.vue'
import Editar from '@/components/LibroEditar.vue'
import Mostrar from '@/components/LibroMostrar.vue'
import Crear from '@/components/LibroCrear.vue'

const routes = [
  {
    path: '/',
    name: 'Lista',
    component: Lista
  },
  {
    path: '/create',
    name: 'Crear',
    component: Crear
  },
  {
    path: '/edit/:id',
    name: 'Editar',
    component: Editar
  },
  {
    path: '/show/:id',
    name: 'Mostrar',
    component: Mostrar
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
