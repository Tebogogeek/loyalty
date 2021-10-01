import React, { useEffect, useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import { useDispatch, useSelector } from 'react-redux'
import { dashboard } from '../action/add';
import Banner from '../partials/Banner';
import { useHistory } from 'react-router';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(dashboard())

  }, [])
  const userdata = JSON.parse(localStorage.getItem('userdata'))
  const dash = useSelector(state => state.addmsg?.dash?.data)
  console.log('sicc', userdata)
  const usertoken = localStorage.getItem('usertoken')
  console.log(usertoken)
  const history = useHistory()
  useEffect(() => {
    if(!usertoken){
      history.push('/')
    }

  }, [usertoken])


  return (
    <div className="flex h-screen overflow-hidden">

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />


      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">


        <Header sidebarOpen={sidebarOpen} userdata={userdata} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

    
            <WelcomeBanner userdata={userdata} />


            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

              </div>

            </div>

            <div className="grid grid-cols-12 gap-6">
              <DashboardCard01 head="Registered Stores" data={dash?.registered_stores} />
              <DashboardCard01 head="Active Stores" data={dash?.active_stores} />
              <DashboardCard01 head="Total Members" data={dash?.total_members} />
              <DashboardCard04 data={dash} />
              <DashboardCard13 data={dash} />
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}

export default Dashboard;