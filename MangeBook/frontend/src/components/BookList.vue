<template>
  <div class="app">
    <!-- Cabeçalho -->
    <header>
      <div class="logo">
        <img src="../components/images/logo.png" alt="Logo da Biblioteca" />
      </div>
      <nav>
        <ul>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/sobre">Sobre</router-link></li>
        </ul>
      </nav>
    </header>

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
          title: 'Livro 2',
          author: 'Autor 2',
          available: false,
          genre: 'Aventura',
          publishedDate: '2021-05-15'
        },
        // Mais livros aqui...
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
      this.$router.push('/registrar-livro');
    },
    editBook(bookId) {
      // Lógica para editar um livro existente
      console.log('Editar livro com ID:', bookId);
    }
  }
};
</script>

<style scoped>
.library-container {
  padding: 20px;
}

.filters {
  margin-bottom: 20px;
}

.book-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.book-card {
  width: 150px;
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  box-sizing: border-box;
}

.book-cover {
  width: 100%;
  height: auto;
}

button {
  padding: 8px 16px;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .book-card {
    width: 120px;
  }

  button {
    width: 100%;
  }
}
</style>
