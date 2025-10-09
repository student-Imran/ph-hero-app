import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 bg-white bg-opacity-80 flex justify-center items-center z-50">
            <div className="text-center">
                <div className="animate-spin rounded-full h-24 w-24 border-4 border-blue-500 border-t-transparent mx-auto"></div>
                <h1 className="text-6xl font-bold text-gray-800 mt-4">Loading...</h1>
            </div>
        </div>
    );
};

export default LoadingSpinner;