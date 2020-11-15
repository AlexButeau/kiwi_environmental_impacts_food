import React, { useContext, useEffect } from 'react';
import { ApiDataContext } from './contexts/ApiDataContext';

function ProductDetails({
  match: {
    params: { id },
  },
}) {
  const { apiData, fetchApiDataId } = useContext(ApiDataContext);

  useEffect(() => {
    fetchApiDataId(id);
    // return function cleanup() {
    //   source.cancel('Operation canceled by the user.');
    // };
  }, []);
  console.log(apiData);

  return <div className="product"></div>;
}

export default ProductDetails;
