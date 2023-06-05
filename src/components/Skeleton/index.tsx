import React from 'react';

const Skeleton = () => (
  <div className="w-full md:w-1/3 my-6">
    <div className="border border-light-blue-300 shadow bg-gray-50 rounded-md p-6 mx-3 h-96">
      <div className="animate-pulse">
        <div className="h-4 bg-blue-400 rounded w-2/6 mb-2"></div>
        <div className="rounded bg-blue-400 h-40 w-full"></div>
        <div className="w-full space-y-4 py-1">
          <div className="h-4 bg-light-blue-400 rounded w-full"></div>
          <div className="space-y-2">
            <div className="h-4 bg-blue-400 rounded"></div>
            <div className="h-4 bg-blue-400 rounded"></div>
            <div className="h-4 bg-blue-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Skeleton;
