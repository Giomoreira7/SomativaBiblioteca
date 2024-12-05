<template>
  <div class="app">
    <!-- Cabeçalho -->
    <header class="header">
      <div class="logo">
        <img src="../components/images/logo.png" alt="Logo da Biblioteca" />
      </div>
      <nav>
        <ul>
          <li><router-link to="/">Início</router-link></li>
          <li><a href="/Login">Login</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="/Login">Administrador</a></li>
        </ul>
      </nav>
      <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="Pesquise livros..." />
        <button @click="searchBooks">Buscar</button>
      </div>
    </header>

    <!-- Adicionar livro -->
    <div class="form-container">
      <h2>Adicionar Livros</h2>
      <input v-model="book.title" placeholder="Title" />
      <input v-model="book.author" placeholder="Author" />
      <input v-model="book.description" placeholder="Description" />
      <input type="file" @change="handleFileUpload" />
      <button @click="addBook">Adicionar</button>
    </div>

    <!-- Listar livros -->
    <div class="list-container">
      <h2>Lista de Livros Adicionados</h2>
      <ul>
        <li v-for="book in books" :key="book._id">
          <img v-if="book.image" :src="`http://localhost:5000${book.image}`" alt="Book Image" width="100" />
          <span>{{ book.title }} - {{ book.author }}</span>
          <button @click="editBook(book)">Editar</button>
          <button @click="removeBook(book._id)">Remover</button>
        </li>
      </ul>
    </div>

    <!-- Editar livro -->
    <div v-if="editingBook" class="form-container">
      <h2>Editar Livro</h2>
      <input v-model="editingBook.title" placeholder="Title" />
      <input v-model="editingBook.author" placeholder="Author" />
      <input v-model="editingBook.description" placeholder="Description" />
      <input type="file" @change="handleFileUpload" />
      <button @click="saveEdit">Salvar</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      books: [],
      book: {
        title: '',
        author: '',
        description: '',
        image: null,
      },
      editingBook: null,
      searchQuery: '',
    };
  },
  mounted() {
    this.listBooks();
  },
  methods: {
    async listBooks() {
      try {
        const response = await axios.get('http://localhost:5000/books');
        this.books = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    handleFileUpload(event) {
      if (this.editingBook) {
        this.editingBook.image = event.target.files[0];
      } else {
        this.book.image = event.target.files[0];
      }
    },

    async addBook() {
      const formData = new FormData();
      formData.append('title', this.book.title);
      formData.append('author', this.book.author);
      formData.append('description', this.book.description);
      if (this.book.image) formData.append('image', this.book.image);

      try {
        const response = await axios.post('http://localhost:5000/books', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        this.listBooks();
        this.book = { title: '', author: '', description: '', image: null };
      } catch (error) {
        console.error(error);
      }
    },

    editBook(book) {
      this.editingBook = { ...book };
    },

    async saveEdit() {
      const formData = new FormData();
      formData.append('title', this.editingBook.title);
      formData.append('author', this.editingBook.author);
      formData.append('description', this.editingBook.description);
      if (this.editingBook.image) formData.append('image', this.editingBook.image);

      try {
        await axios.put(`http://localhost:5000/books/${this.editingBook._id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        this.listBooks();
        this.editingBook = null;
      } catch (error) {
        console.error(error);
      }
    },

    async removeBook(id) {
      try {
        await axios.delete(`http://localhost:5000/books/${id}`);
        this.listBooks();
      } catch (error) {
        console.error(error);
      }
    },

    async searchBooks() {
      try {
        const response = await axios.get(`http://localhost:5000/books/search?q=${this.searchQuery}`);
        this.books = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
/* Estilo global */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #ff0000;
  color: #333;
  line-height: 1.6;
  padding: 20px;
  text-align: center;
}

/* Cabeçalho */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  max-width: 100%;
}

.header .logo img {
  width: 150px;
  border-radius: 10px;
}

header nav ul {
  display: flex;
  gap: 20px;
  list-style: none;
}

header nav ul li a {
  color: #045a5b;
  text-decoration: none;
  font-weight: bold;
}

/* Barra de pesquisa */
.search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-bar input {
  padding: 100px;
  border-radius: 50px;
  border: 1px solid #ff0000;
  margin-right: 10px;
}

.search-bar button {
  background-color:  #045a5b;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.search-bar button:hover {
  background-color: #0bc4c7;
}

/* Formulário de Adicionar Livro */
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

/* Inputs e botões */
input[type="text"], input[type="file"], button {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 1rem;
  border-radius: 40px;
  border: 1px solid #ccc;
}

input[type="text"]:focus, input[type="file"]:focus, button:focus {
  outline: none;
  border-color: #1eac9d;
}

button {
  background-color: #045a5b;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #1eac9d;
}

/* Lista de Livros */
ul {
  list-style-type: none;
  padding: 0;
  margin-top: 30px;
}

ul li {
  background-color: #ff000000;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

ul li img {
  width: 50px;
  height: 75px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 15px;
}

ul li span {
  font-size: 1rem;
  font-weight: normal;
  color: #e20101;
  flex-grow: 1;
}

ul li button {
  background-color: #ff5f5f;
  color: white;
  padding: 8px 15px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

ul li button:hover {
  background-color: #f44336;
}
</style>
