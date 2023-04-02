import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Pokemon } from '../pages/Pokemon'
import { Locations } from '../pages/Locations'
import { Berries } from '../pages/Berries'


export default function Container(props) {

// console.log(props.pd);
// console.log(props.bd);

  return (
    <div className='container'>
    <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/pokemon' element={<Pokemon data={props.pd}/>}>Pokemon</Route>
        <Route path='/locations' element={<Locations />}>Locations</Route>
        <Route path='/berries' element={<Berries data={props.bd}/>}>Berries</Route>
    </Routes>
    </div>
  )
}
