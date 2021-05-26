

const contextReducer = (state, action) => {
    let transcations; 

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transcations = state.filter( (t) => (t.id !== action.payload))
            localStorage.setItem('transactions', JSON.stringify(transcations));
            return transcations;

        case 'ADD_TRANSACTION':
            transcations = [action.payload, ...state];
            localStorage.setItem('transactions', JSON.stringify(transcations));

            return transcations;
        default:
            return state;
    }
}

export default contextReducer