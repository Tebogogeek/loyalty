import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import {useDispatch,useSelector} from 'react-redux'
import { login } from '../action/add';
import { useHistory } from 'react-router';
function Signin() {
    const [logdetail, setlogdetail] = useState({
        email:"" , password : ""
    })
    const dispatch = useDispatch()
    // useEffect(()=>{
    //     dispatch(login(logdetail))

    // },[])
    const loginsucc = useSelector(state=>state.addmsg.login)
    const loginerror = useSelector(state=>state?.addmsg?.error)
    console.log('sicc',loginerror)
    const history = useHistory()
    useEffect(()=>{
        if(loginsucc.success){
            setlogdetail({
                email:"" , password : ""
    
            })
            history.push('/home')

        }
        

    },[loginsucc])
    const usertoken = localStorage.getItem('usertoken')
  console.log(usertoken)
//   const history = useHistory()
    useEffect(() => {
        if(!usertoken){
          history.push('/')
        }else{
            history.push('/home')
        }
    
      }, [usertoken])
    return (
        <div className="signin">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-10 offset-md-4 offset-1 main">
                        <div className="card">
                            <h5 className="text-center">Login</h5>
                            <form onSubmit={(e)=>{
                                e.preventDefault()
                                dispatch(login(logdetail))

                            }}>
                                <input type="text" placeholder="Email" onChange={(e)=>setlogdetail({...logdetail,email:e.target.value})} />
                                <input type="password" placeholder="Password" onChange={(e)=>setlogdetail({...logdetail,password:e.target.value})} />
                                <button type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin
