
const initialState = {
    userList: [],
    userByName: []
}


export const reducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        
        case 'GET_DATA_USERS':
            console.log(action.payload)
            return {
                ...state,
                userList: action.payload
            }
         
        case 'GET_USER_BY_NAME' :
            return {
                ...state,
                userByName: state.userList.filter(
                    user => user.name.toLowerCase().startsWith( action.payload.toLowerCase() ) 
                )
            }   
    
        default:
            return state
    }

}