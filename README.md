# Pokedex V 2.0

Si te parecio divertida la pokedex, ¡enhorabuena! vamos a volver a utilziarla.

Vamos a comenzar a utilizar la api de pokemon (pueden interactuar con ella desde este link(Caro poner link aqui: https://pokeapi.co/))
Veremos una estructura un poco distinta y en esta ocasion, trabajaran tanto en el archivo `App.jsx` y `Pokedex.jsx`.



## Consigna
App.jsx:
- El proyecto cuenta con un `json` pero deberan utilizar el ciclo de vida para hacer llamado a la api y traer los 50 primeros pokemons.
- Se les brindara los estados necesarios para trabajar, dependera de ustedes como deberan modificar los valores

Pokedex.jsx:
- Deberan hacer una funcion que me filtre los pokemons y otra para resetear la lista. Deberan utilizar eventos
- Ya tendran un estado para guiarse.
- Tambien deberan hacer un llamado a la api para obtener los datos del pokemon seleccionado

### Ayudas y Consejos
- Al principio solamente veras un mensaje con un fondo negro. El primer paso es obtener los datos antes de modificar el loader.
- Al manejar apis, es dificil saber como nos llega la data, comprueben que es lo que les llega y que necesitan
- Los unicos datos que debera tener el pokemon son: nombre, id y sus types
- Los unicos datos que debera tener los pokemons son: nombre y su respectiva url


### Pasos para correr el proyecto

Relizar primero `npm install`
Relizar segundo `npm start`

### Versiones de NPM y NODE
En caso de que el proyecto no poder hacer `npm install`, actualizar a las versiones:
`NPM 7.19.1` o superior
`NODE 16.5.0` o superior.
