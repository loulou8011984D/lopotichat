import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

getPokemonyList(): Pokemon[] {
  return POKEMONS;
}

getPokemonById(pokemonId: number): Pokemon|undefined {
  return POKEMONS.find(pokemon => pokemon.id == pokemonId);
}

getPokemonTypeList(): string[] {
  return [
    'Plante',
    'Feu',
    'Insecte',
    'Normal',
    'Electik',
    'Poisson',
    'Fée',
    'Vol',
    'Combat',
    'Psy'
  ];
}
}
