export const loginReducer = (state = false, action) => {
    switch (action.type) {
        case "LOGIN_TOGGLE":
            return state = action.payload

        default:
            return state
            
    }
}


export const loginAction = (store) => {
    store.dispatch({
        type: "LOGIN_TOGGLE",
        payload: !store.getState()
    })
}