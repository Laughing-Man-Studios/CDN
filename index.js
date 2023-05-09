import express from 'express'
import path from 'path';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.resolve('demo/index.html'));
})

app.use(express.static('dist'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})