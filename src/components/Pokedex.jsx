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


    // AREA DE TRABAJO --> Usemos el ciclo de vida nuevamente para setear por unica vez lo que nos llega por props el filterPokemons


    getPokemon = (url) => {
        // Aqui esperas obtener los datos del pokemon y luego enviarlo con la funcion updateParent
        // Solamente necesitas el name, id y types
    }


    /*
    Aqui deberian ir las funciones para los eventos del input y del button

    handleFilter = (event) => {
        Filtrar los pokemons segun lo que le llegue por evento al event.target.value
        Pueden usar un console.log para ver que devuelve
    }



    handleClean = (event) => {
        Debo evitar que se renderice nuevamente la pagina
        Debo setear todos los pokemons nuevamente y limpiar el input
    }

    */


    render() {
        const { filterPokemons } = this.state;
        return (
            <div className="pokeContainer">
                <h3>POKEDEX</h3>
                <form className="pokeSearch">
                    {/* AREA DE TRABAJO PARA CREAR DOS EVENTOS, uno para el input y otro para el button */}
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

