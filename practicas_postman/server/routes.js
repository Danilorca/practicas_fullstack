const {getAllPokemones, createPokemon, getPokemon, deletePokemon, updatePokemon, queryPokemon, promedioPoder, promedio, darElixir, atacar} = require("./controllers/pokemonController")

module.exports = (app) =>{
  /* app.get("/api", (req, res)=>{
    res.json({mensaje: "Hola, estas acceduebdi ak enpoint /api de la API"})
  }) */

  //ENCONTRAR TODOS LOS POKEMONES
  app.get("/api/pokemones",getAllPokemones)

  //CREAR UN POKEMON
  app.post("/api/pokemon/new",createPokemon);

  //BUSCAR UN POKEMON POR ID
  app.get("/api/pokemon/:id",getPokemon);

  //BORRAR UN POKEMON
  app.delete("/api/pokemon/:id",deletePokemon)

  //ACTUALIZAR UN POKEMON
  app.put("/api/pokemon/:id",updatePokemon)

  //QUERY PARAMS
  app.get("/api/pokemon", queryPokemon)

  //PROMEDIO PODER
  app.get("/api/promedio-poder", promedioPoder)

  //PROMEDIO
  app.get("/api/promedio", promedio)

  //DAR ELIXIR
  app.put("/api/dar-elixir", darElixir)

  //DAR ATACAR
  app.put("/api/atacar", atacar)


}


