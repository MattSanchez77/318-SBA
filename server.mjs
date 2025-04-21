import express from 'express'

// Setups
const app = express()
const PORT = 3000 || 3001

// Middleware
app.use(express.json())
app.get('/', (req, res) => {
  res.redirect('/books');
});


Routes
app.get('/', (req, res) => {
  res.redirect('/books');
});

app.use('/books', booksRoutes);
app.use('/authors', authorsRoutes);
app.use('/genres', genresRoutes);


app.listen(PORT, () => {
    console.log(`Server Connected on Port: ${PORT}`);
  });
  