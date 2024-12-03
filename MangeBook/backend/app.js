const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');

const app = express();

// Conexão com o MongoDB
mongoose.connect('mongodb+srv://Giovanna:271004@library.hdzyr.mongodb.net/library', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch(err => {
  console.error('Erro ao conectar ao MongoDB:', err);
});

// Middleware
app.use(express.json());
app.use(cors());

// Configuração do Multer para upload de imagens
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Modelo de Usuário
const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  email: String,
  password: String, // A senha será armazenada criptografada
  role: String, // Pode ser 'Aluno' ou 'Funcionario'
}));

// Rota para registrar usuário
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).send({ error: 'Dados incompletos' });
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).send({ error: 'Email inválido' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).send({ error: 'Usuário já existe' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id, role: newUser.role }, process.env.JWT_SECRET || 'seuSegredoAqui', { expiresIn: '1h' });

    res.status(201).send({ message: 'Usuário registrado com sucesso!', token });
  } catch (error) {
    console.error('Erro ao registrar o usuário', error);
    res.status(500).send({ error: 'Erro ao registrar o usuário' });
  }
});

// Rota para login de usuário
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await User.findOne({ email });

    if (!usuario) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    const senhaValida = await bcrypt.compare(password, usuario.password);
    if (!senhaValida) {
      return res.status(400).json({ error: 'Senha incorreta' });
    }

    const token = jwt.sign({ id: usuario._id, email: usuario.email }, process.env.JWT_SECRET || 'seuSegredoAqui', { expiresIn: '1h' });

    return res.json({ message: 'Login bem-sucedido', token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao processar a requisição' });
  }
});

// Modelo de Livro
const Book = mongoose.model('Book', new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  image: String, // O caminho da imagem será armazenado
}));

// Rota para cadastrar livros
app.post('/api/books', upload.single('image'), async (req, res) => {
    const { title, author, description } = req.body;
    const imagePath = req.file ? req.file.path : null;
  
    if (!title || !author || !description) {
      return res.status(400).send({ error: 'Todos os campos são obrigatórios' });
    }
  
    try {
      const bookCollection = db.collection('books');
  
      const newBook = { title, author, description, image: imagePath };
      await bookCollection.insertOne(newBook);
  
      res.status(201).send({ message: 'Livro cadastrado com sucesso!', book: newBook });
    } catch (error) {
      console.error('Erro ao cadastrar livro:', error);
      res.status(500).send({ error: 'Erro ao cadastrar livro' });
    }
  });

  // Rota para listar livros
app.get('/api/books', async (req, res) => {
    try {
      const bookCollection = db.collection('books');
      const books = await bookCollection.find().toArray(); // Busca todos os livros no banco
      res.status(200).json(books);
    } catch (error) {
      console.error('Erro ao listar livros:', error);
      res.status(500).send({ error: 'Erro ao listar livros' });
    }
  });
  

// Servindo as imagens
app.use('/uploads', express.static('uploads'));

// Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
