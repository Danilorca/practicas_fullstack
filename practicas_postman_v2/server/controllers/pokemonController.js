let pokemones = [
  {
    id:1,
    nombre:"Picachu",
    poder: 47,
    salud: 50
  },
  {
    id:2,
    nombre:"Charizard",
    poder: 55,
    salud:70
  },
  {
    id:3,
    nombre:"Squirtle",
    poder: 40,
    salud:45
  }
];

module.exports.getAllPokemones = (req, res)=>{
  res.json({pokemones:pokemones})
}

module.exports.createPokemon = (req, res)=>{
  console.log("body de la solicitud", req.body)
  pokemones.push(req.body);
  res.json({mensaje:"se ha creado exitosamente el pokemon "+ req.body.nombre})
}

module.exports.getPokemon = (req, res)=>{
  console.log("params en URL", typeof req.params.id)
  //res.json({mensaje:"parametro ID: "+req.params.id})
  const pokemonSelected = pokemones.filter(pokemon =>parseInt(req.params.id) ===pokemon.id);
  console.log(pokemonSelected[0])
  res.json({pokemon:pokemonSelected[0]})
}

module.exports.deletePokemon = (req, res)=>{
  const pokemonesRestantes = pokemones.filter(pokemon=> parseInt(req.params.id)!==pokemon.id)
  pokemones = pokemonesRestantes;
  res.json({pokemones:pokemonesRestantes})
}

module.exports.updatePokemon = (req, res)=>{
  const pokemonesAux= pokemones.map(pokemon=>parseInt(req.params.id)===pokemon.id? req.body : pokemon)
  pokemones= pokemonesAux
  res.json({pokemones:pokemones})
}

module.exports.queryPokemon = (req, res)=>{
  res.json({queryParams:req.query})
}

//Obtener el promedio de poder de los poquemos del arreglo
module.exports.promedioPoder = (req, res) =>{
 let suma = 0;
 pokemones.map(pokemon => suma+= pokemon.poder)
 res.json({promedio:suma/pokemones.length})
}

//Obtener el promedio del campo que se mande como query params
module.exports.promedio = (req, res) =>{
  const tipoDePromedio = req.query.tipoDePromedio;
  let suma = 0;
  pokemones.map(pokemon =>suma+=pokemon[tipoDePromedio])
  res.json({promedio:suma/pokemones.length})

}

//Dar un elixir a un pokemon
module.exports.darElixir = (req, res) =>{
  const pokemonAfectado = pokemones.filter(pokemon => pokemon.id === parseInt(req.query.idPokemon))[0]
  pokemonAfectado[req.query.tipo] += parseInt(req.query.efecto)
  const newPokemones = pokemones.map(pokemon => pokemonAfectado.id===pokemon.id?pokemonAfectado : pokemon)
  pokemones= newPokemones;
  res.json({pokemones:pokemones})
}

//Atacar pokemones
module.exports.atacar = (req, res) =>{
  const atacante = pokemones.filter(pokemon=> pokemon.id === parseInt(req.query.idAtacante))[0]
  const defensor = pokemones.filter(pokemon => pokemon.id === parseInt(req.query.idDefensor))[0]
  defensor.salud-= atacante.poder;
  const newPokemones = pokemones.map(pokemon => pokemon.id === defensor.id? defensor : pokemon)
  pokemones= newPokemones
  res.json({pokemones:pokemones})
}