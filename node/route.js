
// Load HTTP module

import getPokemon from '../node/Ogerpon.js';
import express from 'express';
const app = express();
const hostname = "127.0.0.1";
const port = 3000;

app.get('/', (req, res) => {
  res.send("Welcome to the Ogerdex")
})

app.get('/pokemon/:pokeId', async (req, res) => {
  const pokeId = req.params.pokeId
  const pokemon = await getPokemon(2)
  res.send(pokemon)
})

// Listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(port, hostname, () => {
  console.log(`Currently listening to port: ${port}`);
  // Javascript (fetch_data.js)

});