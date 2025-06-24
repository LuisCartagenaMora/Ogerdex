import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // Store both base and species data
  const [pokemonBaseData, setPokemonBaseData] = useState(null);
  const [pokemonSpeciesData, setPokemonSpeciesData] = useState(null);
  const [pokemonDetailedData, setPokemonDetailedData] = useState(null);

  return (
    <DataContext.Provider
      value={{
        pokemonBaseData,
        setPokemonBaseData,
        pokemonSpeciesData,
        setPokemonSpeciesData,
        pokemonDetailedData,
        setPokemonDetailedData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
