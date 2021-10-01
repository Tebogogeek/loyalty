import React from 'react';
import BarChart from '../../charts/BarChart01';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard04({data}) {


  return (
    <div className="flex flex-col justify-evenly col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
     
      <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white  rounded-sm border border-gray-200" style={{height:'fit-content'}}>
      <div className="px-5 py-0">
      
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Loyalty Members</h2>
        {/* <div className="text-xs font-semibold text-gray-400 uppercase mb-1">Sales</div> */}
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 mr-2">{data?.stores_no_loyalty}</div>
          {/* <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+49%</div> */}
        </div>
      </div>
   
    </div>
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white  rounded-sm border border-gray-200" style={{height:'fit-content'}}>
      <div className="px-5 py-0">
      
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Active Loyalty Members</h2>
        {/* <div className="text-xs font-semibold text-gray-400 uppercase mb-1">Sales</div> */}
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 mr-2">{data?.active_loyalty_members}</div>
          {/* <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+49%</div> */}
        </div>
      </div>
   
    </div>
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white  rounded-sm border border-gray-200" style={{height:'fit-content'}}>
      <div className="px-5 py-0">
      
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Blocked Members</h2>
        {/* <div className="text-xs font-semibold text-gray-400 uppercase mb-1">Sales</div> */}
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 mr-2">{data?.blocked_members}</div>
          {/* <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+49%</div> */}
        </div>
      </div>
   
    </div>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {/* <BarChart data={chartData} width={595} height={248} /> */}
    </div>
  );
}

export default DashboardCard04;
