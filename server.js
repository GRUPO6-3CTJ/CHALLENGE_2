import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/database.js';
import Book from './models/books.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Conectar ao MongoDB
connectDB();

app.get('/', (req, res) => {
    res.send('Tech Challenge - FIAP');
});

// CRUD para Livros
app.post('/livros', async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/livros', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/livros/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/livros/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book) {
            Object.assign(book, req.body);
            await book.save();
            res.status(200).json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/livros/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book) {
            await book.remove();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log('Servidor escutando na porta ${PORT}!');
}); 