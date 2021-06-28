
export const TransactionReducer = (state, action)=> {
    switch(action.type) {
        case 'ADD_TRANSACTION': 
            return {...state, transaction: action.payload};
    }
}