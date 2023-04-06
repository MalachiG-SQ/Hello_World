const express = require('express');
const app = express();
const port = 3000

app.use(express.json());
app.use(express.static('public'));

app.post('/', (req, res) => {
  const name = req.body.name.trim();
    if (!name) {
      res.redirect('/?error');
    }

    if (name.length > 50) {
      res.redirect('/?toolong');
    }

    if (/^\d+$/.test(name)) {
      res.redirect('/?notValid');
    }
    
    if (name === name) {
      res.send(`Hello ${name}`);
    }
});

app.get('/?hello', (req, res) => {
  const info = req.params.info;
  res.status(200).json({info: 'Welcome to hello world!'});
});

app.listen(port, () => {
  console.log('Server started on port 3000');
});