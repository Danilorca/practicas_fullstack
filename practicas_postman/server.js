const express = require("express");
const app = express();
const port = 8000;
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.listen(port,()=>console.log("Api lanzada en puerto:"+port))

app.get("/api",(req, resp)=>{
  resp.json({mensaje:"Hola estas accediendo al endpoind /api de la API"})
})


let pokemones = [
  {
    id:1,
    nombre:"Picachu",
    poder: 47
  },
  {
    id:2,
    nombre:"Charizard",
    poder: 55
  },
  {
    id:3,
    nombre:"Squirtle",
    poder: 40
  }
];

//ENCONTRAR TODOS LOS POKEMONES
app.get("/api/pokemones",(req, res)=>{
  res.json({pokemones:pokemones})
})

//CREAR UN POKEMON
app.post("/api/pokemon/new",(req, res)=>{
  console.log("body de la solicitud", req.body)
  pokemones.push(req.body);
  res.json({mensaje:"se ha creado exitosamente el pokemon "+ req.body.nombre})
})

//BUSCAR UN POKEMON POR ID
app.get("/api/pokemon/:id",(req, res)=>{
  console.log("params en URL", typeof req.params.id)
  //res.json({mensaje:"parametro ID: "+req.params.id})
  const pokemonSelected = pokemones.filter(pokemon =>parseInt(req.params.id) ===pokemon.id);
  console.log(pokemonSelected[0])
  res.json({pokemon:pokemonSelected[0]})
})

//BORRAR UN POKEMON
app.delete("/api/pokemon/:id",(req, res)=>{
  const pokemonesRestantes = pokemones.filter(pokemon=> parseInt(req.params.id)!==pokemon.id)
  pokemones = pokemonesRestantes;
  res.json({pokemones:pokemonesRestantes})
})

//ACTUALIZAR UN POKEMON
app.put("/api/pokemon/:id",(req, res)=>{
  const pokemonesAux= pokemones.map(pokemon=>parseInt(req.params.id)===pokemon.id? req.body : pokemon)
  pokemones= pokemonesAux
  res.json({pokemones:pokemones})
})

//QUERY PARAMS
app.get("/api/pokemon", (req, res)=>{
  res.json({queryParams:req.query})
})

