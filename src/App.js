import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import { useState, useEffect } from "react";

function App() {

  const [berryDataArr, setBerryDataArr] = useState([])
  const [pokeDataArr, setPokeDataArr] = useState([])

  async function fetchBerryData(){
     await fetch(`https://pokeapi.co/api/v2/berry`)
     .then((resp) => resp.json())
     .then(resp => {
      setBerryDataArr(resp.results)
     })
     .catch((err) => console.log('Fetch failed - no data'))
 }

 async function fetchPokeData(){
  await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=900",`)
  .then((resp) => resp.json())
  .then(resp => {
   setPokeDataArr(resp.results)
  })
  .catch((err) => console.log('Fetch failed - no data'))
}

 useEffect(() => {
  fetchBerryData()
  fetchPokeData()
 },[])


  return (
    <div className="app">
      <div>
        <Navbar />
      </div>
      <main>
        <Container bd={berryDataArr} pd={pokeDataArr}/>
      </main>
    </div>
  );
}

export default App;
