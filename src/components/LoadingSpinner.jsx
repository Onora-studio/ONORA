
import React from 'react';
import { Loader } from 'lucide-react';

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center h-full min-h-[calc(100vh-14rem)] w-full">
            <Loader className="w-12 h-12 text-orange-500 animate-spin" />
        </div>
    );
};

export default LoadingSpinner;
