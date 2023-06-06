const app = require('./server');

app.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}`);
});
