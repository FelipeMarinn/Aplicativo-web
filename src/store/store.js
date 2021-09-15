import { combineReducers, createStore } from "redux";
import { reducer } from "../reducers/reducer";
import { homeReducer } from "../reducers/homeReducer";
import { albumsReducer } from "../reducers/albumsReducer";
import { postsReducer } from "../reducers/postsReducer";


const reducers = combineReducers({
    reducer,
    homeReducer,
    albumsReducer,
    postsReducer
})

export const store = createStore( reducers )
