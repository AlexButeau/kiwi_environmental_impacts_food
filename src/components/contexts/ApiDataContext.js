/* eslint-disable max-len */
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ApiDataContext = createContext({
  apiData: [],
  setApiData: () => {},
  fetchApiData: () => {},
});

export default function ApiDataContextProvider({ children }) {
  const [apiData, setApiData] = useState([]);

  const fetchApiDataQuery = (query) => {
    const { CancelToken } = axios;
    const source = CancelToken.source(); // this is used for request cancelation from the api

    axios
      .get(
        `https://koumoul.com/s/data-fair/api/v1/datasets/agribalyse-synthese/values_agg?field=Code_AGB&format=json&agg_size=20&q=${query}&sort=&size=100&select=&highlight=Nom_du_Produit_en_Fran%C3%A7ais&sampling=neighbors`,
        {
          cancelToken: source.token,
        },
      )
      .then((response) => response.data)
      .then((data) => setApiData(data.aggs))
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('Request canceled', err.message);
        }
      });

    return function cleanup() {
      source.cancel('Operation canceled by the user.');
    };
  };

  const fetchApiDataId = (id) => {
    const { CancelToken } = axios;
    const source = CancelToken.source(); // this is used for request cancelation from the api

    axios
      .get(
        `https://koumoul.com/s/data-fair/api/v1/datasets/agribalyse-synthese/values_agg?field=Code_AGB&format=json&agg_size=20&q_mode=simple&Code_AGB_in=${id}&size=20&select=%2A&sampling=neighbors`,
        {
          cancelToken: source.token,
        },
      )
      .then((response) => response.data)
      .then((data) => setApiData(data.aggs))
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('Request canceled', err.message);
        }
      });

    return function cleanup() {
      source.cancel('Operation canceled by the user.');
    };
  };

  // where should the return be? to cancel the request? probably not here cuz it should in a useEffect hook, so it should in the consumer component, but then where should we declare the variables for cancel tokens?

  return (
    <ApiDataContext.Provider
      value={{ apiData, fetchApiDataQuery, fetchApiDataId }}
    >
      {children}
    </ApiDataContext.Provider>
  );

  /* on the page consuming the data:
  const { proverbs, fetchProverbs } = useContext(ProverbsContext);
  const { translate } = useContext(LanguagesContext); <- useful only if second context

  useEffect(() => {
    fetchProverbs();
  }, [fetchProverbs]); */
}
