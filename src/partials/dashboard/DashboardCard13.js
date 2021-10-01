import React from 'react';

function DashboardCard13({data}) {
  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Income</h2>
      </header>
      <div className="p-3">

        {/* Card content */}
        {/* "Today" group */}
        <div>
          {/* <header className="text-xs uppercase text-gray-400 bg-gray-50 rounded-sm font-semibold p-2">Today</header> */}
          <ul className="my-1">
            {/* Item */}
           
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full flex-shrink-0 bg-green-500 my-2 mr-3">
                <svg className="w-9 h-9 fill-current text-green-50" viewBox="0 0 36 36">
                  <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                </svg>
              </div>
              <div className="flex-grow flex items-center border-b border-gray-100 text-sm py-2">
                <div className="flex-grow flex justify-between">
                  <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900" >Total Orders</a></div>
                  <div className="flex-shrink-0 self-start ml-2">
                    <span className="font-medium text-green-500">{data?.total_orders}</span>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full flex-shrink-0 bg-green-500 my-2 mr-3">
                <svg className="w-9 h-9 fill-current text-green-50" viewBox="0 0 36 36">
                  <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                </svg>
              </div>
              <div className="flex-grow flex items-center border-b border-gray-100 text-sm py-2">
                <div className="flex-grow flex justify-between">
                  <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900" >Total Order Value</a></div>
                  <div className="flex-shrink-0 self-start ml-2">
                    <span className="font-medium text-green-500">$ {data?.total_order_value}</span>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="w-9 h-9 rounded-full flex-shrink-0 bg-green-500 my-2 mr-3">
                <svg className="w-9 h-9 fill-current text-green-50" viewBox="0 0 36 36">
                  <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
                </svg>
              </div>
              <div className="flex-grow flex items-center border-b border-gray-100 text-sm py-2">
                <div className="flex-grow flex justify-between">
                  <div className="self-center"><a className="font-medium text-gray-800 hover:text-gray-900" >Total Average Order Value</a></div>
                  <div className="flex-shrink-0 self-start ml-2">
                    <span className="font-medium text-green-500">$ {data?.avg_order_value}</span>
                  </div>
                </div>
              </div>
            </li>
            
          </ul>
        </div>

      </div>
    </div>
  );
}

export default DashboardCard13;
