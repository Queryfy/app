import React, { useState } from 'react';
import { getProducts } from './services/getProducts';
import './App.css';
import { hasOnlyExpressionInitializer } from 'typescript';

interface Product {
  url: string,
  name: string
  image: string,
  price: string,
  priceParsed: number,
  ecommerce: string,
}

const CTA = () => (
  <div id="subscribe" className="bg-gray-50">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">¿Listo para ahorrar?</span>
        <span className="block text-indigo-600">Suscríbete y entérate de nuevas funcionalidades.</span>
      </h2>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Suscribirme
          </a>
        </div>
        {/* <div className="ml-3 inline-flex rounded-md shadow">
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
            Learn more
          </a>
        </div> */}
      </div>
    </div>
  </div>
);
const Features = () => (
  <div id="features" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Compara</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          La mejor forma de buscar productos y comprar por internet.
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">

        </p>
      </div>

      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Compara el mismo producto en distintas tiendas
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Aquí podrás buscar el mismo producto en diferentes tiendas como Exito, Alkosto, Falabella, Mercadolibre y próximamente muchas más.
              </dd>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Precios siempre actualizados
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                No dependemos de la información de terceros. Consultamos automáticamente cada una de las tiendas lo cual garantiza precios siempre actualizados.
              </dd>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Notificaciones de ofertas (próximamente)
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Suscríbete a un producto y hacemos seguimiento del precio para que obtengas la mejor oferta.
              </dd>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Recomendaciones de ofertas y productos basados en tus gustos (próximamente)
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Sé el primero de enterarte de ofertas de productos que desearías tener y aún no lo sabes.
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>
);

const Hero = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className="relative bg-white overflow-hidden mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"/>
                  </a>
                  <div className={`-mr-2 flex items-center md:hidden`}>
                    <button onClick={() => setMenuVisible(!menuVisible)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                      <span className="sr-only">Open main menu</span>
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <a href="#tool" className="font-medium text-gray-500 hover:text-gray-900">Producto</a>

                <a href="#features" className="font-medium text-gray-500 hover:text-gray-900">Funcionalidades</a>

                {/* <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Marketplace</a> */}

                <a href="#subscribe" className="font-medium text-gray-500 hover:text-gray-900">Suscríbete</a>

                {/* <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</a> */}
              </div>
            </nav>
          </div>

          <div className={`menu-mobile absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${!menuVisible ? 'hidden' : ''}`}>
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""/>
                </div>
                <div className="-mr-2">
                  <button onClick={() => setMenuVisible(!menuVisible)} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close main menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#tool" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Producto</a>

                <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Fucionalidades</a>

                <a href="#subscribe" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Suscríbete</a>
              </div>
              {/* <a href="#" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
                Log in
              </a> */}
            </div>
          </div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Busca productos en múltiples tiendas.</span>
                <span className="block text-indigo-600 xl:inline"> Ahorra tiempo y dinero.</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Aquí podrás buscar y comparar el mismo producto en tiendas como <span className="block text-indigo-600 xl:inline">Exito, Alkosto, Falabella, Mercadolibre</span> y próximamente muchas más.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#tool" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Buscar producto
                  </a>
                </div>
                {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    Live demo
                  </a>
                </div> */}
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt=""/>
      </div>
    </div>
  );
};

const Skeleton = () => (
  <div className="w-full md:w-1/3 my-6">
    <div className="border border-light-blue-300 shadow bg-gray-50 rounded-md p-6 mx-3 h-96">
      <div className="animate-pulse">
        <div className="rounded bg-blue-400 h-40 w-full"></div>
        <div className="w-full space-y-4 py-1">
          <div className="h-4 bg-light-blue-400 rounded w-full"></div>
          <div className="space-y-2">
            <div className="h-4 bg-blue-400 rounded"></div>
            <div className="h-4 bg-blue-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

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
