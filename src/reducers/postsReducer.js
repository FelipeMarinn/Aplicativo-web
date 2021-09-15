
const inititialState = {
    postList: []
}

export const postsReducer = ( state = inititialState, action ) => {

    switch (action.type) {
        case 'GET_DATA_POSTS':
            return {
                ...state,
                postList: action.payload
            }

        case 'SET_POST_DATA':
            console.log(action.payload)
            return {
                ...state,
                postList: [ action.payload, ...state.postList ]
            }    
    
        default:
            return state
    }
}
