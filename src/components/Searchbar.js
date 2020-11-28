import React, { useContext, useEffect, useState } from 'react';
import { ApiDataContext } from './contexts/ApiDataContext';

const Searchbar = () => {
  const { apiData, fetchApiDataQuery } = useContext(ApiDataContext);
  const [query, setQuery] = useState('');
  const [suggestionsList, setSuggestionsList] = useState([]);

  const handleChange = (e) => {
    setQuery(() => e.target.value);
    if (e.target.value.length > 0) {
      fetchApiDataQuery(e.target.value.split(' ').join('+'));
    }
  };

  useEffect(() => {
    const arraySuggestions = apiData.map(
      (item) => item.results[0]['Nom_du_Produit_en_Français'],
    );
    setSuggestionsList(arraySuggestions);
  }, [apiData]);

  return (
    <div className="searchbar">
      <form>
        <input
          type="text"
          className="query"
          name="query"
          value={query}
          onChange={(e) => handleChange(e)}
        />
        <input type="submit" value="Valider" />
      </form>
    </div>
  );
};

export default Searchbar;
