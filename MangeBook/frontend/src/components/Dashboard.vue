<template>
  <div class="library-dashboard">
    <!-- Cabeçalho -->
    <header class="header">
      <div class="logo">
        <img src="logo.png" alt="Logo da Biblioteca" />
        <h1></h1>
      </div>
      <nav class="menu">
        <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#">Catálogo</a></li>
          <li><a href="#">Usuários</a></li>
          <li><a href="#">Relatórios</a></li>
        </ul>
      </nav>
    </header>

    <!-- Barra de Pesquisa -->
    <div class="search-bar">
      <input type="text" placeholder="Pesquisar livros..." v-model="searchQuery" />
      <button @click="searchBooks">Pesquisar</button>
    </div>

    <!-- Conteúdo Principal -->
    <main class="main-content">
      <!-- Notificações -->
      <section class="notifications">
        <h2>Notificações</h2>
        <ul>
          <li v-for="(notification, index) in notifications" :key="index">{{ notification }}</li>
        </ul>
      </section>

      <!-- Livros em Destaque -->
      <section class="featured-books">
        <h2>Livros em Destaque</h2>
        <div class="books-grid">
          <div class="book-card" v-for="(book, index) in featuredBooks" :key="index">
            <img :src="book.cover" :alt="book.title" />
            <h3>{{ book.title }}</h3>
            <p>{{ book.author }}</p>
          </div>
        </div>
      </section>

      <!-- Estatísticas -->
      <section class="stats">
        <h2>Estatísticas de Uso</h2>
        <div class="stats-grid">
          <div class="stat-card">
            <h3>{{ stats.loans }}</h3>
            <p>Empréstimos</p>
          </div>
          <div class="stat-card">
            <h3>{{ stats.returns }}</h3>
            <p>Devoluções</p>
          </div>
          <div class="stat-card">
            <h3>{{ stats.reservations }}</h3>
            <p>Reservas</p>
          </div>
        </div>
      </section>

      <!-- Acesso Rápido -->
      <section class="quick-access">
        <h2>Acesso Rápido</h2>
        <div class="icons">
          <button @click="addBook">Adicionar Livro</button>
          <button @click="manageUsers">Gerenciar Usuários</button>
          <button @click="viewReports">Ver Relatórios</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchQuery: "",
      notifications: ["Novo livro adicionado!", "3 livros reservados."],
      featuredBooks: [],
      stats: {
        loans: 0,
        returns: 0,
        reservations: 0,
      },
    };
  },
  methods: {
    searchBooks() {
      console.log("Pesquisando livros:", this.searchQuery);
    },
    addBook() {
      console.log("Adicionar Livro");
    },
    manageUsers() {
      console.log("Gerenciar Usuários");
    },
    viewReports() {
      console.log("Ver Relatórios");
    },
    // Função para buscar dados do backend
    fetchDashboardData() {
      axios.get('http://localhost:3000/api/dashboard/livros-mais-emprestados')
        .then(response => {
          this.featuredBooks = response.data.livrosMaisEmprestados;
        })
        .catch(error => {
          console.error("Erro ao buscar livros em destaque:", error);
        });

      axios.get('http://localhost:3000/api/dashboard/total-livros')
        .then(response => {
          this.stats.loans = response.data.totalLivros;
        })
        .catch(error => {
          console.error("Erro ao buscar total de livros:", error);
        });

      axios.get('http://localhost:3000/api/dashboard/total-usuarios')
        .then(response => {
          this.stats.reservations = response.data.totalUsuarios;
        })
        .catch(error => {
          console.error("Erro ao buscar total de usuários:", error);
        });

      axios.get('http://localhost:3000/api/dashboard/total-emprestimos')
        .then(response => {
          this.stats.returns = response.data.totalEmprestimos;
        })
        .catch(error => {
          console.error("Erro ao buscar total de empréstimos:", error);
        });
    },
  },
  mounted() {
    this.fetchDashboardData(); // Chama a função ao carregar o componente
  }
};
</script>
  
  <style scoped>
  /* Cabeçalho */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color:#045a5b;
    color: white;
  }
  .logo img {
    height: 40px;
    margin-right: 10px;
  }
  .menu ul {
    list-style: none;
    display: flex;
    gap: 15px;
  }
  .menu ul li a {
    color: white;
    text-decoration: none;
  }
  
  /* Barra de Pesquisa */
  .search-bar {
    margin: 20px;
    display: flex;
    gap: 10px;
  }
  .search-bar input {
    flex: 1;
    padding: 10px;
  }
  .search-bar button {
    padding: 10px;
  }
  
  /* Livros em Destaque */
  .featured-books .books-grid {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  .book-card {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }
  
  /* Estatísticas */
  .stats-grid {
    display: flex;
    gap: 20px;
  }
  .stat-card {
    text-align: center;
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
  }
  
  /* Acesso Rápido */
  .quick-access .icons button {
    margin: 10px;
    padding: 10px 20px;
  }
  </style>
  