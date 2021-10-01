import React, { useEffect, useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import { useDispatch, useSelector } from 'react-redux'
import { allstore,createstore } from '../action/add';
import { Modal, Button } from 'react-bootstrap'
import { useHistory } from 'react-router';

function Store() {

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
        name:'', code:'',address:'',user_id:null
      })
    }

  },[crt])
  useEffect(() => {
    dispatch(allstore())

  }, [crt])
  const usertoken = localStorage.getItem('usertoken')
  console.log(usertoken)
  const history = useHistory()
  useEffect(() => {
    if(!usertoken){
      history.push('/')
    }

  }, [usertoken])


  return (
    <div className="flex h-screen overflow-hidden store">

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            <button className="storebtn" onClick={() => setShow(true)}>Create Store</button>

            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              
              </div>

            </div>
            <div className="grid grid-cols-12 gap-6">
  
              <DashboardCard10 data={dash} />
            </div>

          </div>
          <Modal show={show} onHide={handleClose}>
            <form onSubmit={(e)=>{
              e.preventDefault()
              dispatch(createstore(storedata))


            }}>
            <Modal.Header closeButton>
              <Modal.Title>Create New Store</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input type="text" placeholder="Name" onChange={(e)=>setstoredata({...storedata,name:e.target.value})} />
              <input type="text" placeholder="Code" onChange={(e)=>setstoredata({...storedata,code:e.target.value})} />
              <input type="text" placeholder="Address" onChange={(e)=>setstoredata({...storedata,address:e.target.value})}  />
            </Modal.Body>
            <Modal.Footer>
              <Button type='submit' className="storebtn" >
                Save Changes
              </Button>
            </Modal.Footer>
            </form> 
          </Modal>
        </main>
      </div>
    </div>
  );
}

export default Store;