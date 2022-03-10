const stateDefault = {
};


const UserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "LOGIN_USER": {
            console.log("values", action.data)
            return { ...state }
        }
        default: return { ...state }
    }
}

export default UserReducer;