
const initialState = {
    albumList: []
}

export const albumsReducer = ( state = initialState, action) => {
      
    switch (action.type) {
        case 'GET_DATA_ALBUMS':
            return {
                ...state,
                albumList: action.payload
            }
    
        default:
            return state
    }
}