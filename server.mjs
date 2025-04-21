import express from 'express'

// Setups
const app = express()
const PORT = 3000 || 3001

// Middleware
app.use(express.json())
app.get('/', (req, res) => {
  res.redirect('/books');
});





app.listen(PORT, () => {
    console.log(`Server Connected on Port: ${PORT}`);
  });
  