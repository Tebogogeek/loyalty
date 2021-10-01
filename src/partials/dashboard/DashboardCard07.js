import React from 'react';

function DashboardCard07({data}) {
  console.log('lklk',data)
  return (
    <div className="col-span-full xl:col-span-full bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Loyalty Members</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 bg-gray-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">First Name</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Last Name</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Cell Number</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">DOB</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Gender</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Balance</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Created_At</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-gray-100">
              {/* Row */}
             
              {/* Row */}
              {
                data?.map((val)=>{
                  return  <tr>
                  <td className="p-2">
                    <div className="flex items-center">
                      
                      <div className="text-gray-800">{val?.first_name}</div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{val?.last_name}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-green-500">{val?.cell_number}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{val?.dob}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-light-blue-500">{val?.gender}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-green-800">$ {val?.balance}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-light-blue-500">{val?.created_at}</div>
                  </td>
                </tr>
                })
              }
             
              {/* Row */}
              
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
