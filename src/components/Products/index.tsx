import { useState } from 'react';

import { getProducts } from './../../services/getProducts';
import Skeleton from './../../components/Skeleton';
import { currenctyFormatter } from './../../utils/parsers';

type Ecommerce = 'EXITO' | 'MERCADOLIBRE' | 'FALABELLA' | 'ALKOSTO';
interface Product {
  url: string,
  name: string
  image: string,
  price: string,
  priceParsed: number | null,
  ecommerce: string,
}

const ChipColors: Map<Ecommerce, string> = new Map([
  ['EXITO', 'yellow'],
  ['MERCADOLIBRE', 'green'],
  ['FALABELLA', 'blue'],
  ['ALKOSTO', 'red'],
]);

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState<string>('iPhone 13');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const queryProducts = async () => {
    if (!query) return;
    setLoading(true);
    setError(false);
    try {
      const rawProducts = await getProducts(query);
      const sortedProducts = rawProducts.sort((a: Product, b: Product) => a.priceParsed && b.priceParsed ? a.priceParsed - b.priceParsed : -1);
      setProducts(sortedProducts);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
      setProducts(products);
    }
  }

  return (
    <div id="tool" className="max-w-7xl mx-auto px-4 pt-20 sm:px-6 lg:px-8 min-h-1/2">
      <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        ¿Que tal si empiezas buscando ese iPhone 13 que tanto deseas?
      </h2>
      <h2 className="font-sans text-2xl my-2">Busca al tiempo productos en Exito, Mercadolibre, Falabella y Alkosto</h2>
      <div className="mt-4 relative rounded-md shadow-sm w-50">
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="iPhone 13"/>
      </div>
      <div className="flex items-center py-2 md:justify-end">
        <div className="flex justify-around">
          <span className="relative inline-flex rounded-md shadow-sm">
            <button onClick={queryProducts} disabled={loading} type="button" className="inline-flex items-center px-4 py-2 border border-purple-400 text-base leading-6 font-medium rounded-md text-purple-800 bg-white hover:text-purple-700 focus:border-purple-300 transition ease-in-out duration-150 z-10">
              Buscar
            </button>
            <span className="flex absolute h-8 w-16 top-2 right-3 -mt-1 -mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-md bg-purple-400 opacity-75"></span>
            </span>
          </span>
        </div>
      </div>
      <div className="flex flex-wrap">
        {error && <div className="border-red-200 text-red-500 rounded p-4 mx-auto">Algo salió mal, por favor intentalo nuevamente...</div>}
        {loading ?
          [0,1,2,3,4,5,6,7,8].map(d => (<Skeleton key={d}/>))
          :
          products.map((product: Product) =>
            <a className="w-full md:w-1/3 my-6" href={product.url} target="_blank" rel="noopener noreferrer">
              <div className="p-6 mx-3 bg-gray-50 shadow rounded-md h-full">
                <span
                  className={`border-gray-200 bg-${ChipColors.get(product.ecommerce as Ecommerce)}-100 text-${ChipColors.get(product.ecommerce as Ecommerce)}-500 rounded-full px-2 py-1 my-4`}>
                  {product.ecommerce}
                </span>
                <img className="mb-6 mt-3 w-auto max-h-48 mx-auto mix-blend-multiply" src={product.image} alt=""></img>
                <p><b>{product.priceParsed ? currenctyFormatter.format(product.priceParsed) : product.price}{product.ecommerce === 'EXITO' ? '*' : ''}</b></p>
                <h2>{product.name}</h2>
                {product.ecommerce === 'EXITO' && <p className="text-gray-400	mt-2 text-xs">Este producto puede tener descuentos adicionales con tarjetas de crédito</p> }
              </div>
            </a>
          )
        }
      </div>
    </div>
  );
}
