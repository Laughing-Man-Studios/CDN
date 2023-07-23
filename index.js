import express from 'express'
import path from 'path';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;
const origin = process.env.NODE_ENV === 'production' ?
  'http://ski-resort-dashboard.laughing-man-studios.us.to' : 'http://localhost:3000'
const corsOptions = { origin };

app.use(cors(corsOptions));
app.get('/', (req, res) => {
  res.sendFile(path.resolve('demo/index.html'));
})

app.use(express.static('dist'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})