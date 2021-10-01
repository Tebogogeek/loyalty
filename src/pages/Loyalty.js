import React, { useEffect, useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../partials/actions/FilterButton';
import Datepicker from '../partials/actions/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import { useDispatch, useSelector } from 'react-redux'
import { allloyalty, allstore,createstore } from '../action/add';
import Banner from '../partials/Banner';
import { Modal, Button } from 'react-bootstrap'
import { useHistory } from 'react-router';

function Loyalty() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(allstore())

  }, [])
  const [show, setShow] = useState(false);
  const [storedata, setstoredata] = useState({
    name:'', code:'',address:'',user_id:null
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dash = useSelector(state => state.addmsg?.store?.data)
  const crt = useSelector(state => state.addmsg?.crtstore?.success)
  console.log('sicc', dash)
  useEffect(()=>{
    if(crt){
      setShow(false)
      setstoredata({
        first_name:'',last_name:'',cell_number:'', store_code:'',dob:'',gender:''
      })
    }

  },[crt])
  useEffect(() => {
    // dispatch(allstore())
    dispatch(allloyalty())

  }, [crt])
  const usertoken = localStorage.getItem('usertoken')
  console.log(usertoken)
  const history = useHistory()
  useEffect(() => {
    if(!usertoken){
      history.push('/')
    }

  }, [usertoken])

const allloyaltydata = useSelector(state=>state?.addmsg?.allloyalty?.data)
console.log('dddd',allloyaltydata)
  return (
    <div className="flex h-screen overflow-hidden store">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            {/* <WelcomeBanner /> */}
            <button className="storebtn" onClick={() => setShow(true)}>Add Loyalty Member</button>

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Avatars */}
              {/* <DashboardAvatars /> */}

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                   
              </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
  
              {/* <DashboardCard10 data={dash} /> */}
              <DashboardCard07 data={allloyaltydata}/>
           

            </div>

          </div>
          <Modal show={show} onHide={handleClose}>
            <form onSubmit={(e)=>{
              e.preventDefault()
              


            }}>
            <Modal.Header closeButton>
              <Modal.Title>Create New Loyalty Member</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input type="text" placeholder="First Name" onChange={(e)=>setstoredata({...storedata,first_name:e.target.value})} />
              <input type="text" placeholder="Last Name" onChange={(e)=>setstoredata({...storedata,last_name:e.target.value})} />
              <input type="text" placeholder="Cell Number" onChange={(e)=>setstoredata({...storedata,cell_number:e.target.value})} />
              <input type="text" placeholder="Store Code" onChange={(e)=>setstoredata({...storedata,store_code:e.target.value})} />
              <input type="text" placeholder="DOB" onChange={(e)=>setstoredata({...storedata,dob:e.target.value})}  />
              <input type="text" placeholder="Gender" onChange={(e)=>setstoredata({...storedata,gender:e.target.value})} />
            </Modal.Body>
            <Modal.Footer>
              {/* <Button variant="secondary" onClick={handleClose}>
                Close
              </Button> */}
              <Button type='submit' className="storebtn" >
                Save Changes
              </Button>
            </Modal.Footer>
            </form> 
          </Modal>
        </main>

        {/* <Banner /> */}

      </div>
    </div>
  );
}

export default Loyalty;