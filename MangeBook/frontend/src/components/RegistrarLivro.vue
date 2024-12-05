<template>
  <div>
    <h1>Book Management</h1>

    <!-- Adicionar livro -->
    <div>
      <h2>Add Book</h2>
      <input v-model="book.title" placeholder="Title" />
      <input v-model="book.author" placeholder="Author" />
      <input v-model="book.description" placeholder="Description" />
      <input type="file" @change="handleFileUpload" />
      <button @click="addBook">Add</button>
    </div>

    <!-- Listar livros -->
    <div>
      <h2>Book List</h2>
      <ul>
        <li v-for="book in books" :key="book._id">
          <!-- Exibindo a imagem -->
          <img v-if="book.image" :src="`http://localhost:5000${book.image}`" alt="Book Image" width="100" />
          <span>{{ book.title }} - {{ book.author }}</span>
          <button @click="editBook(book)">Edit</button>
          <button @click="removeBook(book._id)">Remove</button>
        </li>
      </ul>
    </div>

    <!-- Editar livro -->
    <div v-if="editingBook">
      <h2>Edit Book</h2>
      <input v-model="editingBook.title" placeholder="Title" />
      <input v-model="editingBook.author" placeholder="Author" />
      <input v-model="editingBook.description" placeholder="Description" />
      <input type="file" @change="handleFileUpload" />
      <button @click="saveEdit">Save</button>
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
        image: null, // Novo campo para armazenar a imagem
      },
      editingBook: null,
    };
  },
  mounted() {
    this.listBooks();
  },
  methods: {
    // Método para listar todos os livros
    async listBooks() {
      try {
        const response = await axios.get('http://localhost:5000/books');
        console.log(response.data); // Verifique aqui o que está retornando, especialmente o campo 'image'
        this.books = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    // Método para lidar com o upload de arquivos
    handleFileUpload(event) {
      // Se estiver editando um livro, atualiza a imagem do livro em edição
      if (this.editingBook) {
        this.editingBook.image = event.target.files[0];
      } else {
        this.book.image = event.target.files[0]; // Atualiza a imagem para o novo livro
      }
    },

    // Método para adicionar um novo livro
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
        console.log('Book added:', response.data); // Verifique a resposta, incluindo a URL da imagem
        this.listBooks();
        this.book = { title: '', author: '', description: '', image: null }; // Limpa os campos
      } catch (error) {
        console.error(error);
      }
    },

    // Método para editar um livro
    editBook(book) {
      this.editingBook = { ...book };
    },

    // Método para salvar as edições de um livro
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

    // Método para remover um livro
    async removeBook(id) {
      try {
        await axios.delete(`http://localhost:5000/books/${id}`);
        this.listBooks();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
/* Estilo para o frontend */
button {
  padding: 10px;
  background-color: #045a5b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
}

button:hover {
  background-color: rgba(21, 180, 150, 0.9);
}

input, button {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

ul li img {
  max-width: 100px;
  margin-top: 10px;
}
</style>
