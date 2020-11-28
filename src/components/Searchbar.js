/* eslint-disable object-curly-newline */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useEffect, useState, useDebugValue } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ApiDataContext } from './contexts/ApiDataContext';
import './styles/searchbar.scss';

function useStateWithLabel(initialValue, name) {
  const [value, setValue] = useState(initialValue);
  useDebugValue(`${name}: ${value}`);
  return [value, setValue];
}

export function Searchbar() {
  const { apiDataQuery, fetchApiDataQuery } = useContext(ApiDataContext);
  const [query, setQuery] = useStateWithLabel('', 'query');
  const [selection, setSelection] = useStateWithLabel('', 'selected item');
  const [showList, setShowList] = useStateWithLabel(false, 'show list');
  const [suggestionsList, setSuggestionsList] = useStateWithLabel(
    [],
    'suggestionsList',
  );

  const handleChange = (e) => {
    console.log(e.target.value);
    setQuery(() => e.target.value);
  };

  useEffect(() => {
    if (query.length > 1) {
      fetchApiDataQuery(query);
    }
  }, [query]);

  useEffect(() => {
    const queryTerms = query
      .split(' ')
      .filter((term) => term.length > 2)
      .map((term) => term.toLowerCase()); // provides with an array of the words

    // console.log(
    //   apiData.map((item) => item.results[0]['Nom_du_Produit_en_Français']),
    // );
    const arraySuggestions = apiDataQuery
      .map((item) => ({
        name: item.results[0]['Nom_du_Produit_en_Français'],
        id: item.value,
      }))
      .filter((item) => {
        for (let i = 0; i < queryTerms.length; i += 1) {
          if (item.name.toLowerCase().includes(queryTerms[i])) {
            return true;
          }
        }
        return false;
      });
    const sortedArray = arraySuggestions.sort((a, b) => {
      if (
        a.name.toLowerCase().indexOf(query) >= 0 &&
        b.name.toLowerCase().indexOf(query) >= 0
      ) {
        return (
          a.name.toLowerCase().indexOf(query) -
          b.name.toLowerCase().indexOf(query)
        );
      }
      if (
        a.name.toLowerCase().indexOf(query) < 0 &&
        b.name.toLowerCase().indexOf(query) < 0
      ) {
        return 0;
      }
      if (
        a.name.toLowerCase().indexOf(query) >= 0 &&
        b.name.toLowerCase().indexOf(query) < 0
      ) {
        return -1;
      }
      if (
        a.name.toLowerCase().indexOf(query) < 0 &&
        b.name.toLowerCase().indexOf(query) >= 0
      ) {
        return 1;
      }
      return 0;
    });
    setSuggestionsList(sortedArray);
  }, [apiDataQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="search-bar">
      <form onSubmit={(e) => handleSubmit(e)}>
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
              onFocus={() => {
                setShowList(true);
              }}
            />
          </label>
          <div id="autocomplete-list" className="autocomplete-items">
            {suggestionsList &&
              showList &&
              suggestionsList.slice(0, 10).map((item) => (
                <div
                  key={item.name}
                  className={
                    item.name.toLowerCase().includes(query) ? 'relevant' : ''
                  }
                  onClick={() => {
                    // submitButton.current.focus();
                    // setShowList(false);
                    // setAddress((prevValue) => ({
                    //   ...prevValue,
                    //   street: e.target.innerHTML,
                    //   coordinates: item.geometry.coordinates,
                    // }));
                    setSelection(item);
                    setQuery(item.name);
                    // setSuggestionsList(null);
                    setShowList(false);
                    // setEnableSubmit(true);
                  }}
                >
                  {item.name}
                </div>
              ))}
          </div>
        </div>

        <Link
          to={`/${selection.id}`}
          onClick={() => {
            console.log('coucou');
            setShowList(false);
          }}
        >
          {' '}
          <input type="submit" value="Valider" />{' '}
        </Link>
      </form>
    </div>
  );
}

export default withRouter(Searchbar);
