import PokemonCard from "./PokemonCard.jsx";
import { useQuery } from "@tanstack/react-query";
import { getAltPokemon } from "/node/Ogerpon.js";
export default function RegionForm({ form }) {
  const {
    data: RegionalData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["Region Variant", form.name],
    queryFn: () => getAltPokemon(form.id),
  });

  if (isLoading) return <div>Loading regional variant...</div>;
  if (error) return <div>Error loading regional variant.</div>;
  if (!RegionalData) return <div>No data found for this variant.</div>;

  return (
    <div className="regional-variant">
      <h1>Regional Variant</h1>
      {console.log("Individual regional form: ", RegionalData)}
      <PokemonCard altPokemon={RegionalData} />
    </div>
  );
}
