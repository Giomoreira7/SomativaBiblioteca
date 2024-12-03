<template>
  <div class="register-book">
    <h1>Cadastrar Livro</h1>
    <form @submit.prevent="submitBook">
      <input 
        type="text" 
        v-model="title" 
        placeholder="Título" 
        required 
      />
      <input 
        type="text" 
        v-model="author" 
        placeholder="Autor" 
        required 
      />
      <textarea 
        v-model="description" 
        placeholder="Descrição" 
        required 
      ></textarea>
      <input 
        type="file" 
        @change="handleImageUpload" 
      />
      <button type="submit">Cadastrar Livro</button>
    </form>

    <div v-if="message" :class="messageType">{{ message }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      author: '',
      description: '',
      image: null,
      message: '',
      messageType: 'success', // Success or error message
    };
  },
  methods: {
    handleImageUpload(event) {
      this.image = event.target.files[0];
    },
    submitBook() {
      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('author', this.author);
      formData.append('description', this.description);
      if (this.image) {
        formData.append('image', this.image);
      }

      axios.post('http://localhost:5000/api/books', formData)
        .then(response => {
          this.message = 'Livro cadastrado com sucesso!';
          this.messageType = 'success';
          this.clearForm();
        })
        .catch(error => {
          this.message = 'Erro ao cadastrar livro!';
          this.messageType = 'error';
        });
    },
    clearForm() {
      this.title = '';
      this.author = '';
      this.description = '';
      this.image = null;
    },
  },
};
</script>


<style scoped>
/* Adapte o estilo como necessário para seu design */
.fundo {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../components/images/FundoLogin.png') no-repeat center center fixed;
  background-size: cover;
}

.register-container {
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.register-header h1 {
  font-size: 24px;
  color: #045a5b;
  margin-bottom: 10px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

input, textarea {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
}

textarea {
  height: 100px;
}

button {
  padding: 12px;
  background-color: #045a5b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s;
  width: 100%;
}

button:hover {
  background-color: rgba(21, 180, 150, 0.9);
}
</style>
