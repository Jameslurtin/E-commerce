import React from 'react';

const BarChart = ({ percentage }) => {
    return (
        <div className='flex items-center'>
            <div className="bg-gray-300 h-8 w-52  mt-2 border-2 border-yellow-400   ">
                <div
                    className="h-full text-center text-white bg-yellow-400  "
                    style={{ width: `${percentage}%` }}
                >
                       
                
                </div>
                
            </div>
            <div className='flex'>
                    {percentage}%
                </div>
               
           

        </div>
    );
};

export default BarChart;
