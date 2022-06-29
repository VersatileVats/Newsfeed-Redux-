const initialButtonState = {
    start: 0,
    end: 5
}

const initialHits = {
    data: []
}

export const setButtonState = (state=initialButtonState, action={}) => {
    switch(action.type) {
        case 'start':
            if(state.start !== 0) {
                return Object.assign(
                    {}, 
                    state, 
                    {start: state.start - 6, end: state.end - (state.end - state.start) - 1})
            } else {
                return state;
            }
        case 'end': 
            if(state.end !== action.payload - 1) {
                if((state.end + 6) > action.payload) {
                    return Object.assign(
                        {},
                        state,
                        {start: state.start + 6, end: action.payload - 1}
                    )
                }
                else {
                    return Object.assign(
                        {},
                        state,
                        {start: state.start + 6, end: state.end + 6}
                    )
                }
            } else {
                return state;
            }
        case 'first':
            if(action.payload !== 0) {
                if(action.payload <= 5) {
                    return Object.assign(
                        {},
                        state,
                        state.end = action.payload
                    )
                } else {
                    return state;
                }
            } else {
                return state;
            }
        default:
            return state;
    }
}

export const setData = (state=initialHits, action={}) => {
    switch(action.type) {
        case 'promise' :
            return Object.assign({}, state, state.data = action.payload);
        default:
            return state;
    }
}