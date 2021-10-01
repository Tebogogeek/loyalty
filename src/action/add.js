import Axios from 'axios'

export const login = (udata) => async (dispatch) => {
    try {
        // alert('click login')
        const { data } = await Axios.post('https://vapi.vetroms.co.za/api/auth/login',udata)
        // console.log(data)
        dispatch({ type: "LOGIN", payload: data })
    } catch (error) {
        alert('check all the fields')
        console.log("error")
    } 

}

export const dashboard = () => async (dispatch) => {
    try {
        // alert('click login')
        const token = localStorage.getItem("usertoken")
        const userid = localStorage.getItem("userid")
        const { data } = await Axios.post('https://vapi.vetroms.co.za/api/dashboard/client',"",{
            params:{
                "api_token":token,
                "user_id":userid
            }
        })
        // console.log(data)
        dispatch({ type: "DASH", payload: data })
    } catch (error) {
        console.log("error")
    } 

}
export const allstore = () => async (dispatch) => {
    try {
        // alert('click login')
        const token = localStorage.getItem("usertoken")
        const userid = localStorage.getItem("userid")
        const { data } = await Axios.get('https://vapi.vetroms.co.za/api/store/all',{
            params:{
                "api_token":token
            }
        })
        // console.log(data)
        dispatch({ type: "ALLSTORE", payload: data })
    } catch (error) {
        console.log("error")
    } 

}
export const allloyalty = () => async (dispatch) => {
    try {
        // alert('click login')
        const token = localStorage.getItem("usertoken")
        const userid = localStorage.getItem("userid")
        const { data } = await Axios.get(`https://vapi.vetroms.co.za/api/loyalty/member/all/${userid}`,{
            params:{
                "api_token":token
            }
        })
        // console.log(data)
        dispatch({ type: "ALLLOYALTY", payload: data })
    } catch (error) {
        console.log("error")
    } 

}
export const createstore = (udata) => async (dispatch) => {
    try {
        // alert('click login')
        console.log('klk',udata)
        const token = localStorage.getItem("usertoken")
        const userid = localStorage.getItem("userid")
        const { data } = await Axios.post('https://vapi.vetroms.co.za/api/store',udata,{
            params:{
                "api_token":token
            }
        })
        // console.log(data)
        dispatch({ type: "CREATESTORE", payload: data })
    } catch (error) {
        console.log("error")
    } 

}
export const logout = ()=> async (dispatch) => {
    localStorage.removeItem('usertoken')
    window.location.reload()
}
export const verify = (udata)=>async(dispatch)=>{

    try {
        console.log('click')
        const token = localStorage.getItem("usertoken")
        console.log('aa',token)
        const { data } = await Axios.patch("http://localhost:7894/user/verify", udata,{ headers: { "x-auth-token": token } })
        dispatch({ type: "VERIFY", payload: data })
        
    } catch (error) {
        console.log('error')
        
    }
}
export const getuser = ()=>async(dispatch)=>{

    try {
        // console.log('click')
        const token = localStorage.getItem("mainusertoken")
        // console.log('aa',token)
        const { data } = await Axios.get("http://localhost:7894/user/oneuser",{ headers: { "x-auth-token": token } })
        dispatch({ type: "GETUSER", payload: data })
        
    } catch (error) {
        console.log('error')
        
    }
}

export const clear = () => async (dispatch) => {
    try {
        // const { data } = await Axios.get("https://devohut.herokuapp.com/msg/get")
        // console.log(data)
        dispatch({ type: "CLEAR" })
    } catch (error) {
        console.log(error)
    }

}
