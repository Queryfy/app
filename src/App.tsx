import React, { useState } from 'react';
import CTA from './components/CTA';
import Hero from './components/Hero';
import Features from './components/Features';
import Skeleton from './components/Skeleton';
import { getProducts } from './services/getProducts';
import './App.css';

interface Product {
  url: string,
  name: string
  image: string,
  price: string,
  priceParsed: number,
  ecommerce: string,
}

function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('iPhone 11');
  const [loading, setLoading] = useState(false);

  const queryProducts = () => {
    if (!query) return;
    setLoading(true);
    getProducts(query)
      .then(items => {
        items.sort((a: Product, b: Product) => a.priceParsed - b.priceParsed);
        setProducts(items);
        setLoading(false);
      });
  }

  return (
    <div className="App container mx-auto">
      <Hero/>
      <Features/>
      <div id="tool" className="max-w-7xl mx-auto px-4 pt-20 sm:px-6 lg:px-8 min-h-1/2">
        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          ¿Que tal si empiezas buscando ese iPhone 11 que tanto deseas?
        </h2>
        <h2 className="font-sans text-2xl my-2">Busca al tiempo productos en Exito, Mercadolibre, Falabella y Alkosto</h2>
        <div className="mt-4 relative rounded-md shadow-sm w-50">
          <input type="text" value={query} onChange={e => setQuery(e.target.value)} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="iPhone 11"/>
        </div>
        <div className="flex items-center py-2 md:justify-end">
          <div className="flex justify-around">
            <span className="relative inline-flex rounded-md shadow-sm">
              <button onClick={() => queryProducts()} type="button" className="inline-flex items-center px-4 py-2 border border-purple-400 text-base leading-6 font-medium rounded-md text-purple-800 bg-white hover:text-purple-700 focus:border-purple-300 transition ease-in-out duration-150 z-10">
                Buscar
              </button>
              <span className="flex absolute h-8 w-16 top-2 right-3 -mt-1 -mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-md bg-purple-400 opacity-75"></span>
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap">
        {loading ?
          [0,1,2,3,4,5,6,7,8].map(d => (<Skeleton/>))
         :
          products.map((product: Product) =>
            <a className="w-full md:w-1/3 my-6" href={product.url} target="_blank" rel="noopener noreferrer">
              <div className="p-6 mx-3 bg-gray-50 shadow rounded-md h-full">
                <img className="mb-6 w-full h-auto" src={product.image} alt=""></img>
                <p><b>{product.price}</b></p>
                <h2>{product.name}</h2>
                <h3>{product.ecommerce}</h3>
              </div>
            </a>
          )
        }
        </div>
        {/* <div className="flex flex-wrap">

        </div> */}
      </div>
      <CTA/>
    </div>
  );
}

export default App;
