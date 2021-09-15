
const inistialState = {
    photoList: []
}

export const homeReducer = ( state = inistialState, action ) => {

    switch (action.type) {

        case 'GET_DATA_PHOTOS':
            let  photos = []
            for ( let i = 0; i < 3; i++ ) {
                photos.push(action.payload[i])
            }
            return {
                ...state,
                photoList: photos
            }
    
        default:
            return state
    }
}