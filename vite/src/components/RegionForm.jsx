import PokemonCard from "./PokemonCard.jsx";
import { useQuery } from "@tanstack/react-query";
import { getAltPokemon } from "/node/Ogerpon.js";
import LoadingIcon from "./LoadingIcon.jsx";
import Error from "./Error.jsx";

export default function RegionForm({ form }) {
  const {
    data: RegionalData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["Region Variant", form.name],
    queryFn: () => getAltPokemon(form.id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <Error error={"Error: Pokémon not found"} />;

  return (
    <div className="regional-variant">
      {console.log("REGIONAL FORM: ", form)}
      <h1>Regional Variant</h1>
      <PokemonCard altPokemon={form.id} />
    </div>
  );
}
