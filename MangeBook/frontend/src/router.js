import { createRouter, createWebHistory } from 'vue-router';

// Importando os componentes
import Login from './components/Login.vue';
import Registrar from './components/Register.vue';
import RegistrarLivro from './components/RegistrarLivro.vue';
import Home from './views/Home.vue';
import Dashboard from './components/Dashboard.vue';
import MenuInicial from '../src/views/MenuIncial.vue';
import BookList from './components/BookList.vue'; // Adicionando a importação do BookList

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Registrar',
    component: Registrar,
  },
  {
    path: '/registrar-livro',
    name: 'RegistrarLivro',
    component: RegistrarLivro,
  },
  {
    path: '/',
    name: 'MenuInicial',
    component: MenuInicial,
  },
  {
    path: '/book-list',  // Caminho para acessar a lista de livros
    name: 'BookList',
    component: BookList,  // O componente BookList será carregado aqui
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
