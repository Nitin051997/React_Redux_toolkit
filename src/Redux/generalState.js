export const generalState = (inputValue) => {
    return {
        type: "generalState",
        payload: inputValue
    }
}

export const generalStateReducer = (state = false, action) => {
    switch(action.type) {
        case 'generalState' : return action.payload
        default : return state
    }
}

export default generalStateReducer;