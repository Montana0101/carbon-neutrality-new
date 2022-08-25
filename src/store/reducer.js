const initialState = {
    baseInfo: {},
    amount:null //访问量
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Save_Base_Info':
            return Object.assign({}, state, {
                baseInfo: action.value
            })
        case "Set_Amount":
            return Object.assign({}, state, {
                amount: action.value
            })
        default:
            return state;
    }
   
}

export default reducer