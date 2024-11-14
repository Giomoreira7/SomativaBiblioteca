<template>
  <div>
    <!-- Logo -->
    <header class="header">
      <h1>Detalhes do Livro</h1>
    </header>

    <!-- Navegação -->
    <nav>
      <ul>
        <li><a href="../public/inicio.html">Início</a></li>
        <li><a href="#">Livros</a></li>
        <li><a href="#">Usuários</a></li>
        <li><a href="#">Relatórios</a></li>
        <li><a href="#">Configurações</a></li>
      </ul>
    </nav>

    <!-- Conteúdo principal -->
    <main>
      <!-- Detalhes do livro -->
      <section class="detalhes-livro">
        <h2>Título do Livro</h2>
        <div class="informacoes-livro">
          <img src="capa.jpg" alt="Capa do Livro" />
          <div class="informacoes">
            <p><strong>Autor:</strong> Autor do Livro</p>
            <p><strong>Descrição:</strong> Esta é uma breve descrição do livro, abordando seus principais pontos e temas.</p>
            <p><strong>Ano de Publicação:</strong> 2023</p>
            <p><strong>Gênero:</strong> Ficção</p>
            <p><strong>ISBN:</strong> 978-3-16-148410-0</p>
            <p><strong>Número de Cópias Disponíveis:</strong> 5</p>
          </div>
        </div>
        <div class="botoes">
          <button>Reservar Livro</button>
          <button>Emprestar Livro</button>
          <button>Editar Informações</button>
        </div>
      </section>

      <!-- Avaliações -->
      <section class="avaliacoes">
        <h3>Comentários e Avaliações</h3>
        <div class="comentario">
          <p><strong>Usuário 1:</strong> Excelente livro! Muito informativo.</p>
          <p><strong>Avaliação:</strong> ★★★★☆</p>
        </div>
        <div class="comentario">
          <p><strong>Usuário 2:</strong> Gostei, mas poderia ser mais longo.</p>
          <p><strong>Avaliação:</strong> ★★★☆☆</p>
        </div>
        <!-- Adicione mais comentários conforme necessário -->
        <div class="novo-comentario">
          <h4>Deixe seu comentário:</h4>
          <textarea placeholder="Digite seu comentário aqui..."></textarea>
          <button>Enviar Comentário</button>
        </div>
      </section>

      <!-- Histórico de empréstimos -->
      <section class="historico">
        <h3>Histórico de Empréstimos e Devoluções</h3>
        <ul>
          <li>Usuário A - Empréstimo em 01/10/2023 - Devolvido em 15/10/2023</li>
          <li>Usuário B - Empréstimo em 05/10/2023 - Devolvido em 20/10/2023</li>
          <!-- Adicione mais histórico conforme necessário -->
        </ul>
      </section>
    </main>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'DM Sans', sans-serif;
  background-color: #f4f4f4;
  padding: 0;
}

header {
  background-color: #045A5B;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  background-color: #333;
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
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.botoes button:hover {
  background-color: #0056b3;
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
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.novo-comentario button:hover {
  background-color: #218838;
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
