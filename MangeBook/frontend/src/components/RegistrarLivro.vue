<template>
  <div>
    <header class="header">
      <div class="logo">
        <img src="../components/images/logo.png" alt="Logo da Biblioteca" />
      </div>
      <h1>Detalhes do Livro</h1>
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

    <main>
      <section class="detalhes-livro">
        <h2>{{ livro.titulo }}</h2>
        <div class="informacoes-livro">
          <div class="informacoes">
          </div>
        </div>
        <div class="botoes">
          <button @click="reservarLivro">Reservar Livro</button>
          <button @click="emprestarLivro">Emprestar Livro</button>
          <button @click="editarInformacoes">Editar Informações</button>
        </div>
      </section>

      <!-- Formulário para adicionar um novo livro -->
      <section class="formulario-livro">
        <h2>Adicionar Novo Livro</h2>
        <form @submit.prevent="adicionarLivro">
          <div>
            <label for="titulo">Título:</label>
            <input type="text" v-model="novoLivro.titulo" id="titulo" required />
          </div>
          <div>
            <label for="autor">Autor:</label>
            <input type="text" v-model="novoLivro.autor" id="autor" required />
          </div>
          <div>
            <label for="descricao">Descrição:</label>
            <textarea v-model="novoLivro.descricao" id="descricao" required></textarea>
          </div>
          <div>
            <label for="anoPublicacao">Ano de Publicação:</label>
            <input type="number" v-model="novoLivro.anoPublicacao" id="anoPublicacao" required />
          </div>
          <div>
            <label for="genero">Gênero:</label>
            <input type="text" v-model="novoLivro.genero" id="genero" required />
          </div>
          <div>
            <label for="isbn">ISBN:</label>
            <input type="text" v-model="novoLivro.isbn" id="isbn" required />
          </div>
          <div>
            <label for="numeroCopias">Número de Cópias:</label>
            <input type="number" v-model="novoLivro.numeroCopias" id="numeroCopias" required />
          </div>
          <div>
            <label for="capa">Capa (URL):</label>
            <input type="text" v-model="novoLivro.capa" id="capa" required />
          </div>
          <button type="submit" :disabled="isSubmitting">Adicionar Livro</button>
        </form>
      </section>

      <!-- Seção de avaliações e histórico de empréstimos -->
      <section class="avaliacoes">
        <h3>Comentários e Avaliações</h3>
        <div v-for="comentario in comentarios" :key="comentario.id" class="comentario">
          <p><strong>{{ comentario.usuario }}:</strong> {{ comentario.texto }}</p>
          <p><strong>Avaliação:</strong> {{ comentario.avaliacao }}</p>
        </div>
        <div class="novo-comentario">
          <h4>Deixe seu comentário:</h4>
          <textarea v-model="novoComentario" placeholder="Digite seu comentário aqui..."></textarea>
          <button @click="enviarComentario">Enviar Comentário</button>
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
      livro: {},
      comentarios: [],
      novoComentario: '',
      historico: [],
      novoLivro: {
        titulo: '',
        autor: '',
        descricao: '',
        anoPublicacao: 0, // Inicializado com 0
        genero: '',
        isbn: '',
        numeroCopias: 0, // Inicializado com 0
        capa: ''
      },
      isSubmitting: false // Controle de submissão
    };
  },
  created() {
    this.fetchLivro();
    this.fetchComentarios();
    this.fetchHistorico();
  },
  methods: {
    fetchLivro() {
      axios.get('http://5000/api/livros')
        .then(response => {
          this.livro = response.data;
        })
        .catch(error => {
          console.error('Erro ao buscar livro:', error);
        });
    },
    fetchComentarios() {
      axios.get('http://5000/api/comentarios/livro/1')
        .then(response => {
          this.comentarios = response.data;
        })
        .catch(error => {
          console.error('Erro ao buscar comentários:', error);
        });
    },
    fetchHistorico() {
      axios.get('http://5000/api/emprestimos/livro')
        .then(response => {
          this.historico = response.data;
        })
        .catch(error => {
          console.error('Erro ao buscar histórico:', error);
        });
    },

    // Método para adicionar um novo livro
    adicionarLivro() {
      if (!this.validarAnoPublicacao()) {
        alert('Ano de publicação inválido.');
        return;
      }

      this.isSubmitting = true;
      axios.post('http://5000/api/livros', this.novoLivro)
        .then(response => {
          alert('Livro adicionado ao catálogo com sucesso!');
          this.livro = response.data;  // Atualiza o livro atual com o novo livro adicionado
          this.isSubmitting = false;
        })
        .catch(error => {
          console.error('Erro ao adicionar livro:', error);
          alert('Erro ao adicionar livro. Tente novamente mais tarde.');
          this.isSubmitting = false;
        });
    },

    // Método para reservar o livro
    reservarLivro() {
      axios.post('http://5000/api/reservar', { livroId: this.livro.id })
        .then(response => {
          alert('Livro reservado com sucesso!');
        })
        .catch(error => {
          console.error('Erro ao reservar livro:', error);
        });
    },

    // Método para emprestar o livro
    emprestarLivro() {
      axios.post('http://5000/api/emprestar', { livroId: this.livro.id })
        .then(response => {
          alert('Livro emprestado com sucesso!');
        })
        .catch(error => {
          console.error('Erro ao emprestar livro:', error);
        });
    },

    // Método para editar informações do livro
    editarInformacoes() {
      axios.put('http://5000/api/livros/', this.livro)
        .then(response => {
          alert('Informações do livro atualizadas!');
        })
        .catch(error => {
          console.error('Erro ao editar livro:', error);
        });
    },

    // Método para enviar um comentário
    enviarComentario() {
      if (this.novoComentario) {
        const comentario = {
          texto: this.novoComentario,
          avaliacao: '★★★★★', // Defina a avaliação conforme necessário
          livroId: this.livro.id,
        };
        axios.post('http://5000/api/comentarios', comentario)
          .then(response => {
            this.comentarios.push(response.data);
            this.novoComentario = ''; // Limpar campo
          })
          .catch(error => {
            console.error('Erro ao enviar comentário:', error);
          });
      }
    },

    // Função de validação do ano de publicação
    validarAnoPublicacao() {
      return this.novoLivro.anoPublicacao > 0 && this.novoLivro.anoPublicacao <= new Date().getFullYear();
    },
  },
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
  background-color: #045A5B;
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
  color: #045A5B;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  background-color: #045A5B;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}

nav ul li a:hover {
  text-decoration: underline;
}

main {
  margin: 20px;
}

.detalhes-livro, .avaliacoes, .historico, .formulario-livro {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px; /* Espaço entre seções */
}

/* Estilo do formulário */
.formulario-livro form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px; /* Limita a largura do formulário */
  margin: 0 auto; /* Centraliza o formulário na tela */
}

.formulario-livro div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.formulario-livro label {
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
}

.formulario-livro input,
.formulario-livro textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 10px;
}

.formulario-livro input[type="number"] {
  moz-appearance: textfield;
}

.formulario-livro button {
  padding: 10px 15px;
  background-color: #045A5B;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.formulario-livro button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.formulario-livro button:hover {
  background-color: #034d4f;
}

/* Estilo dos botões na seção detalhes do livro */
.botoes button {
  padding: 10px 15px;
  margin: 5px;
  background-color: #045A5B;
  color: white;
  border: none;
  cursor: pointer;
}

.botoes button:hover {
  background-color: #034d4f;
}

/* Estilo da área de comentários */
.avaliacoes .novo-comentario textarea {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  min-height: 80px;
}

.avaliacoes .novo-comentario button {
  padding: 10px 15px;
  margin-top: 10px;
  background-color: #045A5B;
  color: white;
  border: none;
  cursor: pointer;
}

.avaliacoes .novo-comentario button:hover {
  background-color: #034d4f;
}

</style>
