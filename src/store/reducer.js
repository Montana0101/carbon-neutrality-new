const initialState = {
    baseInfo: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Save_Base_Info':
            return Object.assign({}, state, {
                baseInfo: action.value
            })
        default:
            return state;
    }

}

export default reducer