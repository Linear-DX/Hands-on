const initialState = { value: '' };

function keywordsReducer(state = initialState, action) {
    switch (action.type) {
        case "setQuery":
            return { ...state, value: action.payload };
        default:
            return state;
    }
}

export default keywordsReducer;