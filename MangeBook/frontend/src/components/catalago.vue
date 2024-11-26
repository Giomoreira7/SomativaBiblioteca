<template>
  <div class="app">
    <!-- Cabeçalho -->
    <header>
      <div class="logo">
        <img src="../components/images/logo.png" alt="Logo da Biblioteca" />
      </div>
      <nav>
        <ul>
          <li><a href="/Home">Pagina Inicial</a></li>
        </ul>
      </nav>
      <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="Pesquise livros..." />
        <button @click="searchBooks">Buscar</button>
      </div>
    </header>

    <!-- Livros por Categorias -->
    <section class="livros">
      <div class="categoria" v-for="(categoria, index) in categoriasLivros" :key="index">
        <h2>{{ categoria.nome }}</h2>
        <div class="livros-grid">
          <div v-for="(livro, index) in categoria.livros" :key="index" class="livro">
            <img :src="livro.imagem" :alt="livro.titulo" />
            <div class="descricao">
              <div class="avaliacao">{{ livro.avaliacao }}</div>
              <div class="titulo">{{ livro.titulo }}</div>
              <div class="autor">Autor: {{ livro.autor }}</div>
              <div class="disponibilidade">Disponível: {{ livro.disponibilidade }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Botão para se cadastrar p/ + -->
    <div class="container-cadastre">
      <router-link to="/register" class="btn-cadastre-mais">Se cadastre para mais</router-link>
    </div>

    <!-- Rodapé -->
    <footer>
      <div class="footer-esquerda">
        <p>Português (Brasil)</p>
      </div>
      <div class="footer-centro">
        <p>© 2024 Todos os direitos reservados, Mange Library ®</p>
      </div>
      <div class="footer-direita">
        <a href="https://www.facebook.com/SENAI.R.Mange/?locale=pt_BR" target="_blank">
          <img src="../components/images/Capa2.jpg" alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com/school/escola-senai-roberto-mange/posts/?feedView=all" target="_blank">
          <img src="../components/images/Capa2.jpg" alt="LinkedIn" />
        </a>
        <a href="https://www.youtube.com/@senaisaopaulo-senairoberto8729" target="_blank">
          <img src="../components/images/Capa2.jpg" alt="YouTube" />
        </a>
        <a href="https://www.instagram.com/senaimange/" target="_blank">
          <img src="../components/images/Capa2.jpg" alt="Instagram" />
        </a>
      </div>
    </footer>
  </div>
</template>


<script>
export default {
  data() {
    return {
      searchQuery: '',
      livros: [
        { imagem: require('../components/images/Livro11.jpg'), avaliacao: "★★★★☆", titulo: "Em rota de colisão", autor: "Bal Khabra ", categoria: "Romance", disponibilidade: "Sim" },
        { imagem: require('../components/images/Livro6.jpg'), avaliacao: "★★★★★", titulo: "O túmulo veloz", autor: "Robert Galbraith", categoria: "Mistério", disponibilidade: "Não" },
        { imagem: require('../components/images/Livro7.jpg'), avaliacao: "★★★★★", titulo: "Depois daquela noite", autor: " Karin Slaughter", categoria: "Mistério", disponibilidade: "Não" },
        { imagem: require('../components/images/Livro8.jpg'), avaliacao: "★★★★★", titulo: "A sociedade oculta de Londres ", autor: " Sarah Penner", categoria: "Mistério", disponibilidade: "Não" },
        { imagem: require('../components/images/Livro9.jpg'), avaliacao: "★★★★★", titulo: "O crime do bom nazista", autor: "Samir Machado de Machado ", categoria: "Mistério", disponibilidade: "Não" },
        { imagem: require('../components/images/Livro10.jpg'), avaliacao: "★★★★★", titulo: "O preço da vitória", autor: "Harlan Coben", categoria: "Mistério", disponibilidade: "Não" },
        { imagem: require('../components/images/Capa2.jpg'), avaliacao: "★★★★☆", titulo: "Me Poupe! (Edição atualizada)", autor: "Nathalia Arcuri", categoria: "Ciência", disponibilidade: "Sim" },
        { imagem: require('../components/images/Livro1.jpg'), avaliacao: "★★★★★", titulo: "O Hobbit + pôster", autor: "J.R.R. Tolkien", categoria: "Ficção", disponibilidade: "Não" },
        { imagem: require('../components/images/Livro2.jpg'), avaliacao: "★★★★★", titulo: "Tudo é rio ", autor: " Carla Madeira", categoria: "Ficção", disponibilidade: "Não" },
        { imagem: require('../components/images/Capa2.jpg'), avaliacao: "★★★★☆", titulo: "O Homem Mais Rico da Babilônia", autor: "George S. Clason", categoria: "História", disponibilidade: "Não" },
        { imagem: require('../components/images/Capa2.jpg'), avaliacao: "★★★★☆", titulo: "O Poder do Hábito", autor: "Charles Duhigg", categoria: "Ciência", disponibilidade: "Sim" },
        { imagem: require('../components/images/Capa2.jpg'), avaliacao: "★★★★☆", titulo: "Mindset", autor: "Carol S. Dweck", categoria: "Ciência", disponibilidade: "Não" },
        { imagem: require('../components/images/Capa2.jpg'), avaliacao: "★★★★★", titulo: "A Psicologia Financeira", autor: "Morgan Housel", categoria: "Ciência", disponibilidade: "Sim" },
        { imagem: require('../components/images/Livro12.jpg'), avaliacao: "★★☆☆☆", titulo: "O morro dos ventos uivantes", autor: " Emily Brontë ", categoria: "Romance", disponibilidade: "Não" },
        { imagem: require('../components/images/Capa2.jpg'), avaliacao: "★★★★☆", titulo: "É Assim que Acaba", autor: "Jonathan Haidt", categoria: "Ciência", disponibilidade: "Sim" },
        { imagem: require('../components/images/Livro13.jpg'), avaliacao: "★★★★☆", titulo: "É Assim que Acaba", autor: "Colleen Hoover", categoria: "Romance", disponibilidade: "Não" },
        { imagem: require('../components/images/Livro14.jpg'), avaliacao: "★★★★☆", titulo: "Vergonha", autor: " Brittainy Cherry", categoria: "Romance", disponibilidade: "Não" },
        { imagem: require('../components/images/Livro15.jpg'), avaliacao: "★★★★☆", titulo: "Imperfeitos", autor: " Christina Lauren", categoria: "Romance", disponibilidade: "Não" },
        { imagem: require('../components/images/Capa2.jpg'), avaliacao: "★★★★☆", titulo: "Princípios milenares", autor: "Tiago Brunet", categoria: "História", disponibilidade: "Sim" },
        { imagem: require('../components/images/Livro3.jpg'), avaliacao: "★★★★☆", titulo: "A empregada", autor: " Freida McFadden ", categoria: "Ficção", disponibilidade: "Não" },
        { imagem: require('../components/images/Livro4.jpg'), avaliacao: "★★★★★", titulo: "A Biblioteca da Meia-Noite", autor: " Matt Haig ", categoria: "Ficção", disponibilidade: "Sim" },
        { imagem: require('../components/images/Capa2.jpg'), avaliacao: "★★★★☆", titulo: "Introdução à Programação", autor: "Nilo Ney", categoria: "Ciência", disponibilidade: "Sim" },
        { imagem: require('../components/images/Capa2.jpg'), avaliacao: "★★★☆☆", titulo: "Desinformação", autor: "Dan Ariely", categoria: "Ciência", disponibilidade: "Não" },
        { imagem: require('../components/images/Capa2.jpg'), avaliacao: "★★★★★", titulo: "A guerra dos chips", autor: "Chris Miller", categoria: "História", disponibilidade: "Sim" },
        { imagem: require('../components/images/Capa2.jpg'), avaliacao: "★★☆☆☆", titulo: "Arquitetura de Software", autor: "Neal Ford", categoria: "Ciência", disponibilidade: "Não" },
        { imagem: require('../components/images/Livro5.jpg'), avaliacao: "★★★★☆", titulo: "Era uma vez um coração partido", autor: " Stephanie Garber ", categoria: "Ficção", disponibilidade: "Sim" },
        { imagem: require('../components/images/Capa2.jpg'), avaliacao: "★★★☆☆", titulo: "Engenharia de Software Moderna", autor: "Marco Tulio", categoria: "Ciência", disponibilidade: "Não" }
      ]
    };
  },
  computed: {
    categoriasLivros() {
      // Agrupando livros por categorias: Ficção, Mistério, Romance, Ciência, História
      const categorias = [
        { nome: "Ficção", livros: this.livros.filter(livro => livro.categoria === 'Ficção') },
        { nome: "Mistério", livros: this.livros.filter(livro => livro.categoria === 'Mistério') },
        { nome: "Romance", livros: this.livros.filter(livro => livro.categoria === 'Romance') },
        { nome: "Ciência", livros: this.livros.filter(livro => livro.categoria === 'Ciência') },
        { nome: "História", livros: this.livros.filter(livro => livro.categoria === 'História') }
      ];
      return categorias;
    }
  },
  methods: {
    searchBooks() {
      alert('Você pesquisou: ' + this.searchQuery);
      // Aqui você pode adicionar a lógica de pesquisa
    }
  }
};
</script>

<style scoped>
/* Estilo do Cabeçalho */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
}

header .logo img {
  height: 70px;
}

header nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

header nav ul li {
  margin-left: 20px; /* Espaço entre os itens */
}

header nav ul li a {
  color: #045A5B;
  text-decoration: none;
  font-size: 22px;
  padding: 10px;
  transition: color 0.3s;
}

header nav ul li a:hover {
  color: #27ae60; /* Cor de hover para o link */
}

header .search-bar {
  display: flex;
  align-items: center; /* Alinha o campo de pesquisa verticalmente ao centro */
}

header .search-bar input {
  padding: 15px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  width: 400px;
}

header .search-bar button {
  padding: 15px;
  background-color: #045A5B;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

header .search-bar button:hover {
  background-color: #27ae60;
}

/* Estilo da seção de livros */
/* Estilo da seção de livros */
.livros {
  margin: 50px 20px;
}

.categoria {
  margin-bottom: 30px;
}

.categoria h2 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #045A5B;
}

.livros-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Cria 5 colunas */
  gap: 20px;
  justify-items: center; /* Centraliza os itens */
}

.livro {
  background-color: white;
  padding: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  text-align: center;
  transition: transform 0.3s ease;
}

.livro:hover {
  transform: translateY(-10px); /* Efeito de mover para frente */
}

.livro img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.descricao {
  padding: 10px;
}

.avaliacao {
  font-size: 14px;
  color: #999;
}

.titulo {
  font-weight: bold;
  margin: 10px 0;
}

.autor, .disponibilidade {
  font-size: 14px;
  color: #555;
}

/* Estilo do botão de cadastro */
.container-cadastre {
  text-align: center;
  margin-top: 20px;
}

.btn-cadastre-mais {
  padding: 15px 30px;
  background-color: #045A5B;
  color: white;
  text-decoration: none;
  font-size: 16px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.btn-cadastre-mais:hover {
  background-color: #27ae60;
}

/* Estilo do Rodapé */
footer {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #333;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
}

footer .footer-esquerda, footer .footer-centro, footer .footer-direita {
  display: flex;
  align-items: center;
}

footer .footer-centro {
  font-size: 14px;
  color: #fff;
}

footer .footer-direita a {
  margin-left: 15px;
}

footer .footer-direita img {
  width: 30px;
  height: 30px;
}
</style>