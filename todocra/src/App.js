import './index.css';

import JokeCard from './components/JokeCard';
import Product from './components/Product';
import React from 'react';
import jokesData from './jokesData';
import productData from './products';

function App() {

  const productComponents = productData.map(p => <Product key={p.id} product={p} />);

  return (
    <div>
      {productComponents}
    </div>
  )
}

export default App;