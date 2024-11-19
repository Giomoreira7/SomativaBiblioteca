<template>
  <div>
    <header class="header">
      <div class="logo">
        <img src="../components/images/logo.png" alt="Logo da Biblioteca" />
      </div>
      <h1>Dashboard - Biblioteca</h1>
    </header>

    <nav>
      <ul>
        <li><router-link to="/">Início</router-link></li>
        <li><router-link to="/book-list">Livros</router-link></li>
        <li><router-link to="/usuarios">Usuários</router-link></li>
        <li><router-link to="/relatorios">Relatórios</router-link></li>
        <li><router-link to="/configuracoes">Configurações</router-link></li>
      </ul>
    </nav>
  </div>
    <div class="dashboard">
      <header>
        <div class="action-icons">
          <i class="fa fa-book" @click="addBook" title="Adicionar Livro"></i>
          <i class="fa fa-users" @click="manageUsers" title="Gerenciar Usuários"></i>
        </div>
      </header>
  
      <section class="status-cards">
        <div class="card">
          <h2>Empréstimos</h2>
          <p>{{ loanStatus }}</p>
        </div>
        <div class="card">
          <h2>Devoluções</h2>
          <p>{{ returnStatus }}</p>
        </div>
        <div class="card">
          <h2>Reservas</h2>
          <p>{{ reservationStatus }}</p>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        loanStatus: '',
        returnStatus: '',
        reservationStatus: ''
      };
    },
    mounted() {
      this.fetchDashboardData();
    },
    methods: {
      fetchDashboardData() {
        axios.get('http://localhost:3000/api/dashboard')
          .then(response => {
            this.loanStatus = response.data.loanStatus;
            this.returnStatus = response.data.returnStatus;
            this.reservationStatus = response.data.reservationStatus;
          })
          .catch(error => {
            console.error("Houve um erro ao buscar os dados: ", error);
          });
      },
      addBook() {
        // Lógica para adicionar um novo livro
        alert("Adicionar livro");
      },
      manageUsers() {
        // Lógica para gerenciar usuários
        alert("Gerenciar usuários");
      }
    }
  };
  </script>
  
  <style scoped>
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'DM Sans', sans-serif;
  background-color:  #045A5B;
  padding: 0;
}

header {
  background-color: #ffffff;
  color: #045A5B;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .logo img {
  height: 70px;
}

header h1 {
  font-size: 24px;
  color:  #045A5B;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  background-color:  #045A5B;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}
  .dashboard {
    padding: 20px;
  }
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .action-icons i {
    font-size: 24px;
    margin: 10px;
    cursor: pointer;
  }
  
  .status-cards {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .card {
    background-color: #f4f4f4;
    padding: 20px;
    width: 30%;
    text-align: center;
    border-radius: 8px;
  }
  
  .card h2 {
    margin-bottom: 10px;
  }
  
  .card p {
    font-size: 18px;
    color: #333;
  }
  </style>
  