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
        { imagem: require('../components/images/Livro16.jpg'), avaliacao: "★★★★☆", titulo: "Outlive: A arte e a ciência de viver mais e melhor", autor: "Peter Attia", categoria: "Ciência", disponibilidade: "Sim" },
        { imagem: require('../components/images/Livro1.jpg'), avaliacao: "★★★★★", titulo: "O Hobbit + pôster", autor: "J.R.R. Tolkien", categoria: "Ficção", disponibilidade: "Não" },
        { imagem: require('../components/images/Livro2.jpg'), avaliacao: "★★★★★", titulo: "Tudo é rio ", autor: " Carla Madeira", categoria: "Ficção", disponibilidade: "Não" },
        { imagem: require('../components/images/Livro21.jpg'), avaliacao: "★★★★☆", titulo: "1499 : O Brasil antes de Cabral", autor: " Reinaldo José Lopes", categoria: "História", disponibilidade: "Não" },
        { imagem: require('../components/images/Livro17.jpg'), avaliacao: "★★★★☆", titulo: "Apaixone-se pelo problema, não pela solução ", autor: "Uri Levine", categoria: "Ciência", disponibilidade: "Sim" },
        { imagem: require('../components/images/Livro18.jpg'), avaliacao: "★★★★☆", titulo: "Uma breve história do tempo", autor: " Stephen Hawking", categoria: "Ciência", disponibilidade: "Não" },
        { imagem: require('../components/images/Livro19.jpg'), avaliacao: "★★★★★", titulo: "Darwin sem frescura", autor: "Reinaldo José Lopes", categoria: "Ciência", disponibilidade: "Sim" },
        { imagem: require('../components/images/Livro12.jpg'), avaliacao: "★★☆☆☆", titulo: "O morro dos ventos uivantes", autor: " Emily Brontë ", categoria: "Romance", disponibilidade: "Não" },
        { imagem: require('../components/images/Livro20.jpg'), avaliacao: "★★★★☆", titulo: "Os mistérios do Universo", autor: "Will Gater", categoria: "Ciência", disponibilidade: "Sim" },
        { imagem: require('../components/images/Livro13.jpg'), avaliacao: "★★★★☆", titulo: "É Assim que Acaba", autor: "Colleen Hoover", categoria: "Romance", disponibilidade: "Não" },
        { imagem: require('../components/images/Livro14.jpg'), avaliacao: "★★★★☆", titulo: "Vergonha", autor: " Brittainy Cherry", categoria: "Romance", disponibilidade: "Não" },
        { imagem: require('../components/images/Livro15.jpg'), avaliacao: "★★★★☆", titulo: "Imperfeitos", autor: " Christina Lauren", categoria: "Romance", disponibilidade: "Não" },
        { imagem: require('../components/images/Livro22.jpg'), avaliacao: "★★★★☆", titulo: "Sobreviventes e guerreiras: Uma breve história da mulher no brasil de 1500 a 2000", autor: " Mary del Priore ", categoria: "História", disponibilidade: "Sim" },
        { imagem: require('../components/images/Livro3.jpg'), avaliacao: "★★★★☆", titulo: "A empregada", autor: " Freida McFadden ", categoria: "Ficção", disponibilidade: "Não" },
        { imagem: require('../components/images/Livro4.jpg'), avaliacao: "★★★★★", titulo: "A Biblioteca da Meia-Noite", autor: " Matt Haig ", categoria: "Ficção", disponibilidade: "Sim" },
        { imagem: require('../components/images/Livro23.jpg'), avaliacao: "★★★★★", titulo: "O perigo de uma história única", autor: " Chimamanda Ngozi Adichie ", categoria: "História", disponibilidade: "Sim" },
        { imagem: require('../components/images/Livro24.jpg'), avaliacao: "★★★★★", titulo: "O queijo e os vermes", autor: " Carlo Ginzburg", categoria: "História", disponibilidade: "Sim" },
        { imagem: require('../components/images/Livro25.jpg'), avaliacao: "★★★★★", titulo: "Israel x Palestina: 100 Anos de Guerra", autor: " James L. Gelvin", categoria: "História", disponibilidade: "Sim" },
        { imagem: require('../components/images/Livro5.jpg'), avaliacao: "★★★★☆", titulo: "Era uma vez um coração partido", autor: " Stephanie Garber ", categoria: "Romance", disponibilidade: "Não" }
      ],
      filteredLivros: []
    };
  },
  computed: {
    categoriasLivros() {
      const categories = ['Ficção', 'Mistério', 'Romance', 'Ciência', 'História'];
      return categories.map(category => ({
        nome: category,
        livros: this.filteredLivros.filter(livro => livro.categoria === category)
      }));
    }
  },
  methods: {
    searchBooks() {
      if (!this.searchQuery) {
        this.filteredLivros = this.livros;
      } else {
        const query = this.searchQuery.toLowerCase();
        this.filteredLivros = this.livros.filter(livro => 
          livro.titulo.toLowerCase().includes(query) || livro.autor.toLowerCase().includes(query)
        );
      }
    }
  },
  mounted() {
    this.filteredLivros = this.livros; // Inicializa com todos os livros
  }
};
</script>

<style scoped>
/* Estilos do componente */
.livros-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.livro {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

.livro img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.livro .descricao {
  margin-top: 10px;
}

.livro .avaliacao {
  font-size: 1.2em;
  color: #f39c12;
}

.livro .titulo {
  font-size: 1.1em;
  font-weight: bold;
}

.livro .autor {
  font-size: 1em;
}

.livro .disponibilidade {
  font-size: 1em;
  color: #27ae60;
}

/* Estilos do cabeçalho e pesquisa */
.search-bar {
  margin: 20px;
}

.search-bar input {
  padding: 10px;
  font-size: 1em;
}

.search-bar button {
  padding: 10px 15px;
  font-size: 1em;
  background-color: #27ae60;
  color: white;
  border: none;
  cursor: pointer;
}

.search-bar button:hover {
  background-color: #2ecc71;
}

/* Rodapé */
footer {
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer a img {
  width: 30px;
  margin: 0 10px;
}

footer .footer-centro {
  text-align: center;
}

footer .footer-direita a {
  margin-right: 20px;
}
</style>
