<template>
  <div>
    <header class="header">
      <div class="logo">
        <img src="../components/images/logo.png" alt="Logo da Biblioteca" />
      </div>
      <h1>Lista de Livros</h1>
    </header>

    <nav>
      <ul>
        <li><router-link to="/">Início</router-link></li>
        <li><router-link to="/book-list">Livros</router-link></li>
        <li><router-link to="/UserManagement">Usuários</router-link></li>
        <li><router-link to="/relatorios">Relatórios</router-link></li>
        <li><router-link to="/configuracoes">Configurações</router-link></li>
      </ul>
    </nav>


    <div class="library-container">
      <!-- Filtros -->
      <div class="filters">
        <label for="author-filter">Autor:</label>
        <input v-model="filters.author" id="author-filter" placeholder="Filtrar por autor" />

        <label for="genre-filter">Gênero:</label>
        <input v-model="filters.genre" id="genre-filter" placeholder="Filtrar por gênero" />

        <label for="date-filter">Data de Publicação:</label>
        <input v-model="filters.date" id="date-filter" type="date" />
      </div>

      <!-- Lista de Livros -->
      <div class="book-list">
        <div v-for="book in filteredBooks" :key="book.id" class="book-card">

          <div class="book-info">
            <h3>{{ book.title }}</h3>
            <p>Autor: {{ book.author }}</p>
            <p>Disponibilidade: {{ book.available ? 'Disponível' : 'Indisponível' }}</p>
            <button @click="editBook(book.id)">Editar</button>
          </div>
        </div>
      </div>

      <!-- Botão para Adicionar Novo Livro -->
      <button @click="addNewBook">Adicionar Novo Livro</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        author: '',
        genre: '',
        date: ''
      },
      books: [
        {
          id: 1,
          cover: 'capa1.jpg',
          title: 'Livro 1',
          author: 'Autor 1',
          available: true,
          genre: 'Ficção',
          publishedDate: '2020-01-01'
        },
        {
          id: 2,
          cover: 'capa2.jpg',
          title: 'O Senhor dos Anéis',
          author: 'J.R.R. Tolkien',
          available: false,
          genre: 'Aventura',
          publishedDate: '2021-05-15'
        },
        {
    id: 3,
    cover: 'capa3.jpg',
    title: '1984',
    author: 'George Orwell',
    available: true,
    genre: 'Ficção',
    publishedDate: '1949-06-08'
  },
  {
    id: 4,
    cover: 'capa4.jpg',
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    available: false,
    genre: 'Ficção',
    publishedDate: '1953-10-19'
  },
  {
    id: 5,
    cover: 'capa5.jpg',
    title: 'O Conto da Aia',
    author: 'Margaret Atwood',
    available: true,
    genre: 'Ficção',
    publishedDate: '1985-09-01'
  },
  {
    id: 6,
    cover: 'capa6.jpg',
    title: 'Admirável Mundo Novo',
    author: 'Aldous Huxley',
    available: true,
    genre: 'Ficção',
    publishedDate: '1932-01-01'
  },
  {
    id: 7,
    cover: 'capa7.jpg',
    title: 'O Hobbit',
    author: 'J.R.R. Tolkien',
    available: true,
    genre: 'Ficção',
    publishedDate: '1937-09-21'
  },
  {
    id: 8,
    cover: 'capa8.jpg',
    title: 'A Máquina do Tempo',
    author: 'H.G. Wells',
    available: true,
    genre: 'Ficção Científica',
    publishedDate: '1895-01-01'
  },
  {
    id: 9,
    cover: 'capa9.jpg',
    title: 'O Ciclo da Fundação',
    author: 'Isaac Asimov',
    available: false,
    genre: 'Ficção Científica',
    publishedDate: '1951-06-01'
  },
  {
    id: 10,
    cover: 'capa10.jpg',
    title: 'Neuromancer',
    author: 'William Gibson',
    available: true,
    genre: 'Ficção Científica',
    publishedDate: '1984-07-01'
  }
      ]
    };
  },
  computed: {
    filteredBooks() {
      return this.books.filter(book => {
        return (
          (this.filters.author === '' || book.author.toLowerCase().includes(this.filters.author.toLowerCase())) &&
          (this.filters.genre === '' || book.genre.toLowerCase().includes(this.filters.genre.toLowerCase())) &&
          (this.filters.date === '' || book.publishedDate === this.filters.date)
        );
      });
    }
  },
  methods: {
    addNewBook() {
      // Lógica para adicionar novo livro, como redirecionamento ou exibição de um formulário/modal
      console.log('Adicionar novo livro');
      this.$router.push('/RegistrarLivro');
    },
    editBook(bookId) {
      // Lógica para editar um livro existente
      console.log('Editar livro com ID:', bookId);
    }
  }
};
</script>

<style scoped>
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
.library-container {
  padding: 50px;
}

.filters {
  margin-bottom: 50px;
  font-size: 20px;
}

.book-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between; /* Garante espaçamento entre os itens */
}

.book-card {
  width: 200px; /* Define uma largura fixa para todas as caixas */
  height: 300px; /* Define uma altura fixa para garantir a uniformidade */
  border: 1px solid #045A5B;
  padding: 10px;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distribui o conteúdo dentro da caixa */
}

.book-cover {
  width: 100%;
  height: 150px; /* Limita a altura da imagem para um tamanho uniforme */
  object-fit: cover; /* Garante que a imagem se ajuste sem distorção */
}

button {
  padding: 8px 16px;
  margin-top: 10px;
  background-color: #045A5B;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #023d3d;
}

@media (max-width: 768px) {
  .book-card {
    width: 150px; /* Ajusta a largura para telas menores */
    height: auto; /* Ajusta a altura automaticamente para telas menores */
  }

  button {
    width: 100%;
  }
}

.filters {
  display: flex;
  flex-direction: column; /* Alinha os elementos em coluna */
  gap: 10px; /* Espaçamento entre os itens */
  padding: 20px;
  background-color: #045A5B; /* Cor de fundo opcional */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Estilo dos rótulos */
.filters label {
  font-size: 17px;
  color: #ffffff;
  margin-bottom: 5px; /* Espaçamento abaixo do label */
  margin-right: auto;
}

/* Estilo para os campos de entrada (inputs) */
.filters input {
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%; /* Faz com que o input ocupe toda a largura disponível */
  box-sizing: border-box; /* Para garantir que o padding não afete a largura */
}

/* Estilo para os inputs de data, se necessário */
.filters input[type="date"] {
  padding: 8px;
}
</style>
