/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useEffect, useState } from 'react';
import { ApiDataContext } from './contexts/ApiDataContext';
import './styles/searchbar.scss';

const Searchbar = () => {
  const { apiData, fetchApiDataQuery } = useContext(ApiDataContext);
  const [query, setQuery] = useState('');
  const [suggestionsList, setSuggestionsList] = useState();

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
    const sortedArray = arraySuggestions.sort((a, b) => {
      if (
        a.toLowerCase().indexOf(query) >= 0 &&
        b.toLowerCase().indexOf(query) >= 0
      ) {
        return a.toLowerCase().indexOf(query) - b.toLowerCase().indexOf(query);
      }
      if (
        a.toLowerCase().indexOf(query) < 0 &&
        b.toLowerCase().indexOf(query) < 0
      ) {
        return 0;
      }
      return b.toLowerCase().indexOf(query) === 0
        ? 1
        : b.toLowerCase().indexOf(query);
    });
    setSuggestionsList(sortedArray);
  }, [apiData]);

  return (
    <div id="search-bar">
      <form>
        <div className="autocomplete">
          <label htmlFor="query">
            {' '}
            Entrez un plat/aliment
            <input
              type="text"
              className="query"
              name="query"
              value={query}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <div id="autocomplete-list" className="autocomplete-items">
            {suggestionsList &&
              // showList &&
              suggestionsList.map((item) => (
                <div
                  key={item}
                  // onClick={(e) => {
                  // submitButton.current.focus();
                  // setShowList(false);
                  // setAddress((prevValue) => ({
                  //   ...prevValue,
                  //   street: e.target.innerHTML,
                  //   coordinates: item.geometry.coordinates,
                  // }));
                  // setAutocomplete(null);
                  // setEnableSubmit(true);
                  // }}
                >
                  {item}
                </div>
              ))}
          </div>
        </div>

        <input type="submit" value="Valider" />
      </form>
    </div>
  );
};

export default Searchbar;
