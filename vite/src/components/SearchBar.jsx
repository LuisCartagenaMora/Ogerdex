import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";
import pokemonList from "../pokemonList.json";
import Error from "./Error.jsx";

const fuse = new Fuse(pokemonList, {
  keys: ["name", "id"],
  threshold: 0.3, // Adjust for strictness
});

function SearchBar() {
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([]);
  const [input, setInput] = useState("");
  const [showError, setShowError] = useState(false);

  function handleInputChange(e) {
    const value = e.target.value;
    setInput(value);
    setShowError(false); // Reset error on input change
    if (value.length > 0) {
      const results = fuse
        .search(value)
        .slice(0, 5)
        .map((r) => r.item);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  }

  function handleSelect(nameOrId) {
    setInput("");
    setSuggestions([]);
    navigate(`/pokemon/view/${nameOrId}`);
  }

  return (
    <div>
      <input
        className="search-bar"
        placeholder="Type pokemon's name/id"
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter" && suggestions.length > 0) {
            handleSelect(suggestions[0].id);
          }
          if (e.key === "Enter" && suggestions.length === 0) {
            setShowError(true);
          }
        }}
      />
      {showError && <Error error={"No Pokemon Found..."} />}
      {suggestions.length > 0 && (
        <ul className="autocomplete-list">
          {suggestions.map((p) => (
            <li
              key={p.id}
              style={{ padding: "4px", cursor: "pointer" }}
              onClick={() => handleSelect(p.id)}
            >
              #{p.id} {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
