<template>
  <div>
    <h2>Cadastrar Livro</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="titulo">Título:</label>
        <input type="text" id="titulo" v-model="livro.titulo" required />
      </div>
      <div>
        <label for="autor">Autor:</label>
        <input type="text" id="autor" v-model="livro.autor" required />
      </div>
      <div>
        <label for="descricao">Descrição:</label>
        <textarea id="descricao" v-model="livro.descricao" required></textarea>
      </div>
      <div>
        <label for="anoPublicacao">Ano de Publicação:</label>
        <input type="number" id="anoPublicacao" v-model="livro.anoPublicacao" required />
      </div>
      <div>
        <label for="genero">Gênero:</label>
        <input type="text" id="genero" v-model="livro.genero" required />
      </div>
      <div>
        <label for="isbn">ISBN:</label>
        <input type="text" id="isbn" v-model="livro.isbn" required />
      </div>
      <div>
        <label for="numeroCopias">Número de Cópias:</label>
        <input type="number" id="numeroCopias" v-model="livro.numeroCopias" required />
      </div>
      <div>
        <label for="capa">URL da Capa:</label>
        <input type="text" id="capa" v-model="livro.capa" required />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      livro: {
        titulo: '',
        autor: '',
        descricao: '',
        anoPublicacao: '',
        genero: '',
        isbn: '',
        numeroCopias: '',
        capa: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Enviar o livro para a API
      fetch('http://localhost:5000/api/livros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.livro),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Livro cadastrado:', data);
          // Limpar o formulário após cadastro
          this.livro = {
            titulo: '',
            autor: '',
            descricao: '',
            anoPublicacao: '',
            genero: '',
            isbn: '',
            numeroCopias: '',
            capa: '',
          };
          alert('Livro cadastrado com sucesso!');
        })
        .catch((error) => {
          console.error('Erro ao cadastrar livro:', error);
          alert('Erro ao cadastrar livro!');
        });
    },
  },
};
</script>

<style>
/* Seu estilo aqui */
</style>
