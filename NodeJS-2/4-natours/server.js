const app = require('./app');

// 4) START SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
