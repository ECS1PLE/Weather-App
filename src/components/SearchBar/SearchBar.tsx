import React, { useState } from "react";
import "./SearchBar.css";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
        placeholder="Введите город"
      />
      <button onClick={handleSearch} className="search-button">
        Искать
      </button>
    </div>
  );
};

export default SearchBar;
