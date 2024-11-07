import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm); // Llama a la función de búsqueda con el término actual
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 shadow-sm w-full max-w-md"
    >
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Buscar productos..."
        className="flex-grow text-gray-700 focus:outline-none"
      />
    </form>
  );
}

export default SearchBar;
