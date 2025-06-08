// Load HTTP module

import getPokemon from "./Ogerpon.js";
import express from "express";
const app = express();
const hostname = "127.0.0.1";
const port = 3000;

app.get("/home", (req, res) => {
  res.send("Welcome to the Ogerdex");
});

app.get("/pokemon/name/:pokemonName", async (req, res) => {
  const name = req.params.pokemonName;
  const pokemon = await getPokemon(name);
  res.send(pokemon);
});
app.get("/pokemon/id/:pokemonId", async (req, res) => {
  const id = req.params.pokemonId;
  const pokemon = await getPokemon(id);
  res.send(pokemon);
});

async (req, res) => {
  const name = req.params.pokemonName;
  const pokemon = await getPokemon(name);
  res.send(pokemon);
};
app.get("/pokemon/id/:pokemonId", async (req, res) => {
  const id = req.params.pokemonId;
  const pokemon = await getPokemon(id);
  res.send(pokemon);
});

// Listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(port, hostname, () => {
  console.log(`Currently listening to port: ${port}`);
  // Javascript (fetch_data.js)
});
