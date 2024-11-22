import { createRouter, createWebHistory } from 'vue-router';

// Importando os componentes
import Login from './components/Login.vue';
import Registrar from './components/Register.vue';
import RegistrarLivro from './components/RegistrarLivro.vue';
import Home from './views/Home.vue';
import Dashboard from '../src/views/Dashboard.vue';
import MenuInicial from '../src/views/MenuIncial.vue';
import BookList from './components/BookList.vue'; // Adicionando a importação do BookList
import catalago from './components/catalago.vue';

const routes = [
  {
    path: '/Dashboard', // Corrigido o caminho
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Registrar',
    component: Registrar,
  },
  {
    path: '/RegistrarLivro',
    name: 'RegistrarLivro',
    component: RegistrarLivro,
  },
  {
    path: '/MenuInicial',
    name: 'MenuInicial',
    component: MenuInicial,
  },
  {
    path: '/book-list',  // Caminho para acessar a lista de livros
    name: 'BookList',
    component: BookList,  // O componente BookList será carregado aqui
  },
  {
    path: '/',  // Adicionando rota com parâmetro de categoria
    name: 'Catalago',
    component: catalago,  // O componente Catalogo será carregado aqui
    props: true, // Permite passar o parâmetro como uma prop
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
