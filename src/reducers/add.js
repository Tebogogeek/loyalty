const initial = {
    signup: "",
    error: "",
    login: '',
    verify: '',
    getuser: [],
    dash: [],
    store: [],
    crtstore: [],
    allloyalty:[],
    error:[],
    token: localStorage.getItem('mainusertoken')
}

const addmsg = (state = initial, action) => {
    switch (action.type) {
        case "SIGNUP":
            return {
                signup: action.payload,
                error: ''
            }
        case "LOGIN":
            localStorage.setItem('usertoken', action.payload.data.token)
            localStorage.setItem('userid', JSON.stringify(action.payload.data.id))
            localStorage.setItem('userdata', JSON.stringify(action.payload.data))

            return {
                login: action.payload,
                error: ''
            }
        case "VERIFY":
            localStorage.removeItem('usertoken')
            localStorage.setItem('mainusertoken', action.payload)
            return {
                verify: action.payload,
                error: ''
            }
        case "DASH":
            return {
                dash: action.payload
            }
        case "ALLSTORE":
            return {
                store: action.payload
            }
        case "ERROR":
            return {
                error:action.payload
            }
        case "CREATESTORE":
            return {
                crtstore: action.payload
            }
        case "ALLLOYALTY":
            return {
                allloyalty: action.payload
            }

        case "GETUSER":
            return {
                getuser: action.payload
            }
        case "LOGOUT":
            localStorage.removeItem('mainusertoken')
            return {
                getuser: []
            }
        case "ERROR":
            return {
                signup: '',
                error: 'error'
            }
        case "CLEAR":
            return {
                signup: '',
                error: ''

            }





        default:
            return state
    }
}
export default addmsg