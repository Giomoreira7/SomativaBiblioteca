import { createRouter, createWebHistory } from 'vue-router';

// Importando os componentes
import Login from './components/Login.vue';
import Registrar from './components/Register.vue';
import RegistrarLivro from './components/RegistrarLivro.vue';
import Home from './views/Home.vue';
import Dashboard from '../src/views/Dashboard.vue';
import MenuInicial from '../src/views/MenuIncial.vue';
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
    path: '/',
    name: 'RegistrarLivro',
    component: RegistrarLivro,
  },
  {
    path: '/MenuInicial',
    name: 'MenuInicial',
    component: MenuInicial,
  },
  {
    path: '/Catalago',  // Adicionando rota com parâmetro de categoria
    name: 'Catalago',
    component: catalago,  // O componente Catalogo será carregado aqui
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
