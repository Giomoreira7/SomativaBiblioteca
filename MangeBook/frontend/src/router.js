import { createRouter, createWebHistory } from 'vue-router';

import Login from './components/Login.vue';   // Página de login
import Registrar from './components/Register.vue';   // Página de registro
import RegistrarLivro from './components/RegistrarLivro.vue';  // Página de registrar livro

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,  // Página de Login
  },
  {
    path: '/registrar',
    name: 'Registrar',
    component: Registrar,  // Página de Registrar
  },
  {
    path: '/registrar-livro',  // A nova rota para registrar livros
    name: 'RegistrarLivro',
    component: RegistrarLivro,  // Componente RegistrarLivro
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
