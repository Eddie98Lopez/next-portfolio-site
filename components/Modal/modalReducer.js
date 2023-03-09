const initialState = {
    display:false,
    title:'',
    message: '',
    error:false,
  }

const modalReducer = (state, action) => {
    const {type, payload} = action

    switch (type) {
        case 'CLOSE_MODAL':
            return initialState
        case "OPEN_MODAL":
            return {...state,title:payload.title, text:payload.text, error:payload.error || state.error, display:true} 
    
        default:
            return state
    }
}
export default modalReducer