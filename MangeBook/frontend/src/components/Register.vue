<template>
  <div class="cadastro-container">
    <div class="cadastro-header">
      <h1>Cadastrar-se na Biblioteca</h1>
      <p>Preencha os campos abaixo para criar sua conta.</p>
    </div>

    <form class="cadastro-form" @submit.prevent="handleSubmit">
      <label for="nome">Nome Completo *</label>
      <input
        type="text"
        id="nome"
        v-model="form.nome"
        placeholder="Digite seu nome completo"
        required
      />

      <label for="email">Email *</label>
      <input
        type="email"
        id="email"
        v-model="form.email"
        placeholder="Digite seu email"
        required
      />

      <label for="cpf">CPF *</label>
      <input
        type="text"
        id="cpf"
        v-model="form.cpf"
        placeholder="000.000.000-00"
        required
      />

      <label>Você é:</label>
      <div class="radio-group">
        <input
          type="radio"
          id="aluno"
          name="tipo"
          value="Aluno"
          v-model="form.tipo"
          required
        />
        <label for="aluno">Aluno</label>

        <input
          type="radio"
          id="funcionario"
          name="tipo"
          value="Funcionário"
          v-model="form.tipo"
          required
        />
        <label for="funcionario">Funcionário</label>
      </div>

      <!-- Campo dinâmico para RM ou NIF -->
      <div v-if="form.tipo" id="campo-identificacao">
        <label for="identificacao" id="label-identificacao"></label>
        <input
          type="text"
          id="identificacao"
          v-model="form.identificacao"
          :placeholder="placeholderIdentificacao"
          required
        />
      </div>

      <label for="senha">Senha *</label>
      <input
        type="password"
        id="senha"
        v-model="form.senha"
        placeholder="Crie uma senha"
        required
      />

      <label for="confirma-senha">Confirme a Senha *</label>
      <input
        type="password"
        id="confirma-senha"
        v-model="form.confirmaSenha"
        placeholder="Confirme sua senha"
        required
      />

      <button type="submit">Cadastrar</button>
    </form>

    <div class="cadastro-footer">
      <p>Já possui uma conta? <a href="../components/LoginPage.vue" class="link-login">Faça login</a></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        nome: '',
        email: '',
        cpf: '',
        tipo: '', // 'Aluno' ou 'Funcionário'
        identificacao: '', // RM ou NIF
        senha: '',
        confirmaSenha: ''
      }
    };
  },
  computed: {
    // Definir o texto do placeholder para o campo de identificação dinamicamente
    placeholderIdentificacao() {
      return this.form.tipo === 'Aluno'
        ? 'Digite seu RM (Registro de Matrícula)'
        : this.form.tipo === 'Funcionário'
        ? 'Digite seu NIF (Número de Identificação)'
        : '';
    }
  },
  methods: {
    handleSubmit() {
      // Verificar se as senhas coincidem
      if (this.form.senha !== this.form.confirmaSenha) {
        alert('As senhas não coincidem! Verifique e tente novamente.');
        return;
      }

      // Validação de CPF - (Exemplo simples de validação, adicione uma validação mais robusta conforme necessário)
      if (!this.isValidCPF(this.form.cpf)) {
        alert('CPF inválido! Verifique e tente novamente.');
        return;
      }

      // Aqui você pode enviar os dados para a API (exemplo de envio usando axios)
      console.log('Dados do cadastro:', this.form);
      // this.$axios.post('/api/cadastrar', this.form);

      // Limpar o formulário após o envio
      this.form = {
        nome: '',
        email: '',
        cpf: '',
        tipo: '',
        identificacao: '',
        senha: '',
        confirmaSenha: ''
      };
      alert('Cadastro realizado com sucesso!');
    },

    isValidCPF(cpf) {
      // Função de validação de CPF simples
      // Uma validação de CPF mais robusta deve ser feita aqui
      return cpf.length === 14 && /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/.test(cpf);
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

body {
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background: url(./images/FundoLogin.png) no-repeat center center fixed;
}

.cadastro-container {
  width: 100%;
  max-width: 450px;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 780px;
  margin-top: 100px;
}

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

.radio-group {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

.radio-group input {
  margin-right: 5px;
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

/* Responsividade para telas pequenas */
@media (max-width: 600px) {
  .cadastro-container {
    padding: 20px;
    max-width: 90%;
  }

  .cadastro-header h1 {
    font-size: 20px;
  }

  .cadastro-header p {
    font-size: 12px;
  }

  input {
    padding: 10px;
    font-size: 14px;
  }

  button {
    font-size: 16px;
    padding: 10px;
  }
}
</style>
