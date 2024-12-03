<template>
  <div class="fundo">
    <div class="register-container">
      <div class="register-header">
        <h1>Registrar</h1>
      </div>
      
      <form @submit.prevent="submitRegister">
        <input 
          type="text" 
          v-model="name" 
          placeholder="Nome" 
          required 
        />
        <input 
          type="email" 
          v-model="email" 
          placeholder="Email" 
          required 
        />
        <input 
          type="password" 
          v-model="password" 
          placeholder="Senha" 
          required 
        />
        <select v-model="role" required>
          <option value="Aluno">Aluno</option>
          <option value="Funcionario">Funcionário</option>
        </select>
        <button type="submit">Registrar</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      role: 'Aluno'
    };
  },
  methods: {
    submitRegister() {
      const registerData = {
        name: this.name,
        email: this.email,
        password: this.password,
        role: this.role
      };

      axios.post('http://localhost:5000/api/register', registerData)
        .then(response => {
          console.log('Usuário registrado:', response);
          this.$router.push('/login'); // Redireciona para a página de login
        })
        .catch(error => {
          console.error('Erro ao registrar:', error);
        });
    }
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.fundo {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../components/images/FundoLogin.png') no-repeat center center fixed; /* Ajuste o caminho aqui */
  background-size: cover;
}

body {
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Caixa de Cadastro */
.cadastro-container {
  width: 400px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Cabeçalho */
.cadastro-header h1 {
  font-size: 24px;
  color: #045a5b;
  margin-bottom: 10px;
  text-align: center;
}

.cadastro-header p {
  font-size: 14px;
  margin-bottom: 20px;
  color: #555;
  text-align: center;
}

/* Formulário */
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

input {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
}

/* Grupo de Radios */
.radio-group {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

.radio-group input {
  margin-right: 5px;
}

/* Botão */
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

/* Rodapé */
.cadastro-footer {
  margin-top: 20px;
  text-align: center;
}

.cadastro-footer a {
  color: rgba(21, 180, 150, 1);
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
}

.cadastro-footer a:hover {
  text-decoration: underline;
}

/* Responsividade */
@media (max-width: 600px) {
  .cadastro-container {
    padding: 20px;
    max-width: 90%; /* Ajusta a largura para 90% da tela */
    margin-top: 20px; /* Reduz a margem superior */
  }

  .cadastro-header h1 {
    font-size: 20px; /* Reduz o tamanho do título */
  }

  .cadastro-header p {
    font-size: 12px; /* Reduz o tamanho da descrição */
  }

  input {
    padding: 10px;
    font-size: 14px; /* Ajusta o tamanho das fontes */
  }

  button {
    font-size: 16px;
    padding: 10px; /* Ajusta o tamanho do botão */
  }

  .radio-group {
    flex-direction: column; /* Exibe os radios em coluna para melhor espaço */
    gap: 10px; /* Aumenta o espaço entre os radios */
  }
}

/* Responsividade Extra para telas ainda menores (ex: celulares mais antigos) */
@media (max-width: 400px) {
  .cadastro-container {
    padding: 15px;
  }

  .cadastro-header h1 {
    font-size: 18px; /* Título menor em telas bem pequenas */
  }

  .cadastro-header p {
    font-size: 10px; /* Reduz ainda mais a descrição */
  }

  input {
    font-size: 12px; /* Ajusta a fonte dos inputs */
  }

  button {
    font-size: 14px;
  }
}
</style>
