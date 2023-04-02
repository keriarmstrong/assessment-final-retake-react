import React from 'react'
// import PokemonCard from '../components/PokemonCard';
import { useState } from 'react';

export const Pokemon = (data) => {

    const [textInput, setTextInput] = useState('')
    const [name, setName] = useState('')
    const [sprite, setSprite] = useState('')
    const [id, setId] = useState('')
    const [pokeDetailsURL, setPokeDetailsURL] = useState('')
    const pokeDataArr = (data.data)

    function findPokemon(e) {
        pokeDataArr.map(el => {
            if (el.name === textInput) {

                setName(`Name: ${el.name}`)
                setPokeDetailsURL(el.url)
                console.log(el.url);
                // console.log(el.sprites.front_default)
            }
        })
    }

    async function fetchData() {
        await fetch(pokeDetailsURL)
            .then((resp) => resp.json())
            .then(resp => {
                setId(`ID ${resp.id}`);
                setSprite(resp.sprites.front_default)

            })
            .catch((err) => console.log('Fetch failed - no data'))
    }



    const handleChange = (e) => {
        setTextInput(e.target.value);
    };
    // console.log(data.data);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(textInput);
        findPokemon(e)
        fetchData()
        // setTextInput('')
    };

    return (
        <div>
            <header>
                <h1>Search for a Pokemon</h1>
            </header>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="Find Your Pokemon"
                    value={textInput}
                    onChange={handleChange}
                />
                <button type="submit">SUBMIT</button>
            </form>
            {/* <PokemonCard /> */}
            <h2>{name}</h2>
            <img src={sprite} alt='pokemon'></img>
            <h2>{id}</h2>
        </div>
    )
}
