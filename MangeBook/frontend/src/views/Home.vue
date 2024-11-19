<template>
  <div class="app">
    <!-- Cabeçalho -->
    <header>
      <div class="logo">
        <img src="../components/images/logo.png" alt="Logo da Biblioteca" />
      </div>
      <nav>
        <ul>
          <li><a href="#login">Login</a></li>
          <li><a href="#sobre">Sobre</a></li>
        </ul>
      </nav>
      <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="Pesquise livros..." />
        <button @click="searchBooks">Buscar</button>
      </div>
    </header>

    <!-- Seção "Sobre" -->
    <section id="sobre">
      <!-- Conteúdo sobre, se necessário -->
    </section>

    <!-- Indicação do Mês com 5 Imagens -->
    <section id="indicacao-do-mes">
      <div class="indicacao-titulo">
        <h2>Indicação do Mês</h2>
      </div>
      <div class="indicacao-imagens">
        <img src="path/to/image1.jpg" alt="Imagem 1" />
        <img src="path/to/image2.jpg" alt="Imagem 2" />
        <img src="path/to/image3.jpg" alt="Imagem 3" />
        <img src="path/to/image4.jpg" alt="Imagem 4" />
        <img src="path/to/image5.jpg" alt="Imagem 5" />
      </div>
    </section>

    <!-- Categorias -->
    <section class="categorias">
      <h2 class="categorias-titulo">Categorias</h2> <!-- Título "Categorias" -->
      <div class="categorias-botoes">
        <button class="categoria">Ficção</button>
        <button class="categoria">Mistério</button>
        <button class="categoria">Romance</button>
        <button class="categoria">Ciência</button>
        <button class="categoria">História</button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      searchQuery: ''
    };
  },
  methods: {
    login() {
      // Lógica de login
      console.log("Usuário:", this.username);
      console.log("Senha:", this.password);
    },
    searchBooks() {
      // Lógica de pesquisa de livros
      console.log("Buscando por:", this.searchQuery);
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

header {
  display: flex;
  justify-content: space-between; /* Distribui o espaço entre a navegação e a barra de pesquisa */
  align-items: center; /* Alinha os itens verticalmente ao centro */
  padding: 20px; /* Adiciona padding ao header */
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


#sobre {
  background-image: url('../components/images/FundoTela01.png'); /* Caminho da sua imagem */
  background-size: cover;  /* Faz a imagem cobrir toda a seção */
  background-position: center center; /* Centraliza a imagem */
  background-attachment: fixed; /* Faz a imagem de fundo se mover com o conteúdo ao rolar */
  padding: 40px;
  color: white; /* Cor do texto para contraste com o fundo */
  text-align: center;
  height: 70vh;
}

#sobre h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

#sobre p {
  font-size: 18px;
  margin-bottom: 20px;
}
section#login {
  background-color: #f39c12;
  color: white;
}

section#login form {
  display: flex;
  flex-direction: column;
  align-items: left;
}

section#login input {
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 200px;
}

section#login button {
  padding: 10px 20px;
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

#indicacao-do-mes {
  text-align: center;
  padding: 40px 0;
  background-color: #045A5B; /* Cor de fundo para a seção */
}

.indicacao-titulo h2 {
  font-size: 40px;
  color: #ffffff;
  margin-bottom: 10px;
  text-align: left; 
  margin-left: 30px;
}

.indicacao-imagens {
  display: flex;
  justify-content: center;
  gap: 20px; /* Espaçamento entre as imagens */
}

.indicacao-imagens img {
  width: 150px;
  height: auto;
  border-radius: 10px; /* Bordas arredondadas para as imagens */
}

/* Estilos para as seções anteriores */
section {
  padding: 40px;
  text-align: left;
}
.categorias {
  margin-top: 40px;
  text-align: center;
}

.categorias-titulo {
  font-size: 45px;
  color: #045A5B;
  margin-bottom: 100px;
  text-align: center; 
  margin-top: 10px;
}

.categorias-botoes {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.categoria {
  background-color:  #045A5B; /* Cor verde */
  color: white;
  border: none;
  padding: 70px 200px;
  border-radius: 25px; /* Botões arredondados */
  font-size: 25px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.categoria:hover {
  background-color:  #45a0a1; /* Cor de hover mais clara */
}

</style>
