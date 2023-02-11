const projectReducer = (state,action) => {
    switch (action.type) {
        case 'UPDATE_IMG_INDEX':
            return {...state, imgIndex: action.payload};
            
        case 'TOGGLE_MODAL':
            return {...state, modal:!state.modal, imgIndex: action.payload || 0}
    
        default:
            return state;
    }
}

export default projectReducer