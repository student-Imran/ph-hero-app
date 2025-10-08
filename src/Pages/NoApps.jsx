import React from 'react';
import sad from '../assets/sad1.jpg'
const NoApps = () => {
    return (
        <div className="grid place-items-center col-span-4 w-full">
  <div className="flex items-center">
    <h1 className="text-5xl font-bold text-gray-500 mr-3">No Apps Found</h1>
    <figure className="w-12 h-12 pt-2">
      <img src={sad} alt="Sad" className="w-full h-full object-contain" />
    </figure>
  </div>
</div>
    );
};

export default NoApps;