<template>
  <div class="app">
    <!-- Cabeçalho -->
    <header>
      <div class="logo">
        <img src="../components/images/logo.png" alt="Logo da Biblioteca" />
      </div>
      <nav>
        <ul>
          <li><a href="/home">Pagina Inicial</a></li>
          <li><a href="#sobre">Sobre</a></li>
        </ul>
      </nav>
      <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="Pesquise livros..." />
        <button @click="searchBooks">Buscar</button>
      </div>
    </header>

    <div class="catalog-body">
     

      <!-- Exibição das categorias uma abaixo da outra -->
      <div class="category-list">
        <div v-for="(category, index) in categories" :key="index" class="category-container">
          <h3>{{ category.name }}</h3>
          <div class="book-list">
            <div v-for="book in category.books" :key="book.id" class="book-card">
              <img :src="`/path/to/images/${book.cover}`" alt="Capa do livro" class="book-cover" />
              <div class="book-info">
                <h4>{{ book.title }}</h4>
                <p>{{ book.author }}</p>
                <p>Disponibilidade: {{ book.available ? 'Disponível' : 'Indisponível' }}</p>
                <button @click="viewBookDetails(book.id)">Ver Detalhes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      categories: [
        {
          name: 'Ficção',
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
              title: 'O Senhor dos Anéis',
              author: 'J.R.R. Tolkien',
              available: false,
              genre: 'Ficção',
              publishedDate: '2021-05-15'
            }
          ]
        },
        {
          name: 'Mistério',
          books: [
            {
              id: 3,
              cover: 'capa3.jpg',
              title: 'Sherlock Holmes',
              author: 'Arthur Conan Doyle',
              available: true,
              genre: 'Mistério',
              publishedDate: '1892-10-14'
            }
          ]
        },
        {
          name: 'Romance',
          books: [
            {
              id: 4,
              cover: 'capa4.jpg',
              title: 'Orgulho e Preconceito',
              author: 'Jane Austen',
              available: true,
              genre: 'Romance',
              publishedDate: '1813-01-28'
            }
          ]
        },
        {
          name: 'Ciência',
          books: [
            {
              id: 5,
              cover: 'capa5.jpg',
              title: 'A Origem das Espécies',
              author: 'Charles Darwin',
              available: false,
              genre: 'Ciência',
              publishedDate: '1859-11-24'
            }
          ]
        },
        {
          name: 'História',
          books: [
            {
              id: 6,
              cover: 'capa6.jpg',
              title: 'A História da Segunda Guerra Mundial',
              author: 'Winston Churchill',
              available: true,
              genre: 'História',
              publishedDate: '1948-11-01'
            }
          ]
        }
      ]
    };
  },
  methods: {
    viewBookDetails(bookId) {
      // Lógica para visualizar os detalhes do livro
      console.log('Visualizando detalhes do livro com ID:', bookId);
    }
  }
};
</script>

<style scoped>
.catalog-container {
  padding: 20px;
}

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
  width: 400px; /* Largura do campo de pesquisa */
  font-size: 16px; /* Tamanho da fonte do campo de pesquisa */
}

header .search-bar button {
  padding: 15px 40px; /* Tamanho do botão */
  background-color: #045A5B;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

header .search-bar button:hover {
  background-color: #1a9496; /* Cor de fundo do botão ao passar o mouse */
}

/* Seções */
section {
  padding: 40px; /* Padding para as seções */
  text-align: left;
}

.catalog-body {
  margin-top: 30px;
}

.filters {
  margin-bottom: 30px;
  font-size: 16px;
}

.filters label {
  display: block;
  margin-bottom: 8px;
}

.filters input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.category-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.category-container {
  border: 1px solid #045a5b;
  padding: 20px;
}

.book-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.book-card {
  width: 150px;
  border: 1px solid #045a5b;
  padding: 10px;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.book-cover {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 15px;
}

button {
  padding: 8px 16px;
  margin-top: 10px;
  background-color: #045a5b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #023d3d;
}
</style>
