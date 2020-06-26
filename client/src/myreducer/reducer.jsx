const { STATES } = require("mongoose")

const iState = {
    text: '',
    mywishes: [{ _id: 1, wish: "loading" }]
}


const reducer = (state = iState, action) => {
    switch (action.type) {
        case "UPDATE_INPUT":
            return {
                ...state,
                text: action.payload
            }
            break;
        case "GET_WISH":
            return {
                ...state,
                mywishes: action.payload
            }
            break;
        case "ADD_WISH":
            return {
                ...state,
                //mywishes: action.payload // Replace New response
                mywishes: [...state.mywishes, action.payload]// Append Response with Existing Data 
            }
            break;
        case "DELETE_WISH":
            const newWishes = state.mywishes.filter(item => {
                return item._id !== action.payload._id
            })
            return {
                ...state,
                mywishes: newWishes
            }
            break;
        default:
            break;
    }

    return state;
}
export default reducer;