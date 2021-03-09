const Redux = require("redux")
 
const counterReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COUNTER': {
            return [...state, action.payload]
        }
        case 'INCREMENT_COUNTER': {
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, value: item.value + item.change}
                }
                else {
                    return item
                }
            }
            )
        }
        case 'DECREMENT_COUNTER': {
 
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return {...item, value: item.value - item.change }
                }
                else {
                    return item
                }
            }
            )
        }
        case 'CHANGE_INCREMENTED_VALUE': {
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        change: parseInt(action.payload.change)
                    }
                }
                else {
                    return item
                }
            }
            )
        }
        case 'DELETE_COUNTER': {
            return state.filter(n => n.id !== action.payload.id)
        }
        default: {
            return state
       }
    }
}
 
const store = Redux.createStore(
    counterReducer
)
export default store
 