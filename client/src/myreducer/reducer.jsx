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

        default:
            break;
    }

    return state;
}
export default reducer;