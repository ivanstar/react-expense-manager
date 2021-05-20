export default (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSCATION':
            return {
                ...state, //send the current state
                //change the transaction value ~ fitler out the transcation that we want
                transcations: state.transcations.filter( (transcation) => (transcation.id !== action.payload))
            }
        case 'ADD_TRANSCATION':
            return{
                ...state,//keep the current states
                transcations: [action.payload , ...state.transcations] //spread operator to keep current states then add the new transcation
            }

        default:
            return state
    }
}