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
          <img :src="livro.capa" alt="Capa do Livro" />
          <div class="informacoes">
            <p><strong>Autor:</strong> {{ livro.autor }}</p>
            <p><strong>Descrição:</strong> {{ livro.descricao }}</p>
            <p><strong>Ano de Publicação:</strong> {{ livro.anoPublicacao }}</p>
            <p><strong>Gênero:</strong> {{ livro.genero }}</p>
            <p><strong>ISBN:</strong> {{ livro.isbn }}</p>
            <p><strong>Número de Cópias Disponíveis:</strong> {{ livro.numeroCopias }}</p>
          </div>
        </div>
        <div class="botoes">
          <button @click="reservarLivro">Reservar Livro</button>
          <button @click="emprestarLivro">Emprestar Livro</button>
          <button @click="editarInformacoes">Editar Informações</button>
        </div>
      </section>

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

      <section class="historico">
        <h3>Histórico de Empréstimos e Devoluções</h3>
        <ul>
          <li v-for="emprestimo in historico" :key="emprestimo.id">
            {{ emprestimo.usuario }} - Empréstimo em {{ emprestimo.dataEmprestimo }} - Devolvido em {{ emprestimo.dataDevolucao }}
          </li>
        </ul>
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
    };
  },
  created() {
    this.fetchLivro();
    this.fetchComentarios();
    this.fetchHistorico();
  },
  methods: {
    // Método para buscar os dados do livro
    fetchLivro() {
      axios.get('http://seu-backend.com/api/livros/1')
        .then(response => {
          this.livro = response.data;
        })
        .catch(error => {
          console.error('Erro ao buscar livro:', error);
        });
    },

    // Método para buscar os comentários
    fetchComentarios() {
      axios.get('http://seu-backend.com/api/comentarios/livro/1')
        .then(response => {
          this.comentarios = response.data;
        })
        .catch(error => {
          console.error('Erro ao buscar comentários:', error);
        });
    },

    // Método para buscar histórico de empréstimos
    fetchHistorico() {
      axios.get('http://seu-backend.com/api/emprestimos/livro/1')
        .then(response => {
          this.historico = response.data;
        })
        .catch(error => {
          console.error('Erro ao buscar histórico:', error);
        });
    },

    // Método para reservar o livro
    reservarLivro() {
      axios.post('http://seu-backend.com/api/reservar', { livroId: this.livro.id })
        .then(response => {
          alert('Livro reservado com sucesso!');
        })
        .catch(error => {
          console.error('Erro ao reservar livro:', error);
        });
    },

    // Método para emprestar o livro
    emprestarLivro() {
      axios.post('http://seu-backend.com/api/emprestar', { livroId: this.livro.id })
        .then(response => {
          alert('Livro emprestado com sucesso!');
        })
        .catch(error => {
          console.error('Erro ao emprestar livro:', error);
        });
    },

    // Método para editar informações do livro
    editarInformacoes() {
      axios.put('http://seu-backend.com/api/livros/1', this.livro)
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
        axios.post('http://seu-backend.com/api/comentarios', comentario)
          .then(response => {
            this.comentarios.push(response.data);
            this.novoComentario = ''; // Limpar campo
          })
          .catch(error => {
            console.error('Erro ao enviar comentário:', error);
          });
      }
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

nav ul li a:hover {
  text-decoration: underline;
}

main {
  margin: 20px;
}

.detalles-livro, .avaliacoes, .historico {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.detalles-livro img {
  max-width: 200px;
  border-radius: 5px;
}

.informacoes-livro {
  display: flex;
  margin-bottom: 20px;
}

.informacoes-livro .informacoes {
  margin-left: 20px;
}

.informacoes p {
  font-size: 16px;
  margin-bottom: 10px;
}

.botoes button {
  padding: 20px 30px;
  background-color: #045A5B;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin:10px;
}

.botoes button:hover {
  background-color:  #487f80;
}

.avaliacoes .comentario {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.novo-comentario {
  margin-top: 20px;
}

.novo-comentario textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  font-size: 14px;
}

.novo-comentario button {
  padding: 10px 15px;
  background-color:  #045A5B;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.novo-comentario button:hover {
  background-color:  #487f80;
}

@media (max-width: 768px) {
  .informacoes-livro {
    flex-direction: column;
    align-items: center;
  }

  .informacoes-livro img {
    width: 100%;
    margin-bottom: 20px;
  }

  .botoes button {
    width: 100%;
    margin-bottom: 10px;
  }

  .detalles-livro h2 {
    font-size: 24px;
  }
}

</style>
