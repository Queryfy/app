import React from 'react';

const CTA = () => (
  <div id="subscribe" className="bg-gray-50">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">¿Listo para ahorrar?</span>
        <span className="block text-indigo-600">Suscríbete y entérate de nuevas funcionalidades.</span>
      </h2>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <a href="https://forms.gle/Hk2BnMJ9Q8vairHfA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Suscribirme
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default CTA;
