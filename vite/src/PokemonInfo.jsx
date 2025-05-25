import Header from '../src/components/Header.jsx'
import Footer from '../src/components/Footer.jsx'
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import getPokemon from '../node/Ogerpon.js'
import '../src/css/details.css'


function PokemonInfo() {
    const { pokemonId } = useParams()
    const [pokemonDetails, setPokemonDetails] = useState([])

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const pokemon = await getPokemon(pokemonId)
                console.log(pokemon.stats)
                const labels = Object.keys(stats)
                const values = Object.values(stats)
                setPokemonDetails(pokemon)
            } catch (e) {
                console.error(e)
            }
        }
        fetchPokemon()
    }, [pokemonId])

    console.log(pokemonDetails)

    return (
        <>
            <Header />
            <div className='details-box'>
                <ul>
                    <img className='pokemon-sprite' src={pokemonDetails.sprite}></img>
                    <li>Name: {pokemonDetails.name}</li>
                    <li>Types: {pokemonDetails.type[0]}/{pokemonDetails.type[1]}</li>
                    <li>Abilities: {pokemonDetails.ability.ability[0]}</li>
                    <li>Hidden Ability: {pokemonDetails.ability.hidden_ability}</li>
                    <BarChart
                        xAxis={[
                            {
                                id: 'stats',
                                data: labels,
                                scaleType: 'band',
                            },
                        ]}
                        series={[
                            {
                                data: values,
                                label: 'Base Stats',
                                color: '#3b82f6', // optional: choose a theme color
                            },
                        ]}
                        height={300}
                    />
                </ul>
            </div>
            <Footer />
        </>

    )
}

export default PokemonInfo