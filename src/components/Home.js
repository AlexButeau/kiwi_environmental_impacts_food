import React from 'react';
import Suggestions from './Suggestions';

function Home() {
  return (
    <div className="home">
      {/* <Searchbar /> */}
      <Suggestions />
      {/* careful, the rendering of this element will have to be conditional */}
    </div>
  );
}

export default Home;
