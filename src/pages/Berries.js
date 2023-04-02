import React from 'react'
import Dropdown from '../components/Dropdown'
import { useState } from 'react'

export const Berries = (data) => {
    const [name, setName] = useState('')
    const [firmURL, setFirmURL] = useState('')
    const [firmness, setFirmness] = useState('')
    const dataArr = (data.data)
    // let firmURL = ('')

    // console.log(dataArr);

    async function fetchData(){
        await fetch(firmURL)
        .then((resp) => resp.json())
        .then(resp => {
        //  console.log(resp.firmness.name);
         setFirmness(resp.firmness.name)
        })
        .catch((err) => console.log('Fetch failed - no data'))
    }

    function handleOnChange(e) {
       
        // console.log(movieData);
        // console.log(e.target.value);
        dataArr.map(el => {
            if (el.name === e.target.value) {
                setFirmURL(el.url);
                fetchData();
                setName(`${el.name}`)
                
            }
        })
    }

    return (
        <div>
            <header>
                <h1>Select a Type</h1>
            </header>
           <div onChange={handleOnChange}>
            <Dropdown data={dataArr}/>
            <br/>
            <br/>
            <h2>{name}</h2>
            <h2>{firmness}</h2>
            </div>
        </div>
    )
}