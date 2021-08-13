import React, { Component } from 'react'
import "../styles/Pokedex.css"

export default class Pokedex extends Component {
    constructor() {
        super();
        this.state = {
            filterPokemons: [],
            searched: "",
        }
    }


    getPokemon = (url) => {
        // Aqui esperas obtener los datos del pokemon y luego enviarlo con la funcion updateParent
        // Solamente necesitas el name, id y types
    }


    render() {
        const { filterPokemons } = this.state;
        return (
            <div className="pokeContainer">
                <h3>POKEDEX</h3>
                <form className="pokeSearch">
                    <input type="text" placeholder="Filtra los pokemones" value={this.state.searched} />
                    <button>Limpiar</button>
                </form>
                <div className="pokeList">
                    {filterPokemons.map(pokemon => (
                        <p key={pokemon.name} onClick={() => this.getPokemon(pokemon.url)} className="pokeOption">{pokemon.name}</p>
                    ))}
                </div>
            </div>
        )
    }
}

