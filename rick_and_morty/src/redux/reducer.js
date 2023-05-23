import { ADD_FAV, REMOVE_FAV } from "./actions-type"

const initislState = {
    myFavorites: []
}

const reducer = (state = initislState, {type, payload}) => {
    switch(type){
        case REMOVE_FAV: const filteredFavs = state.myFavorites.filter( fav => fav.id !== Number(payload)) 
        return{...state, myFavorites: filteredFavs}
             
        case ADD_FAV: return{...state, myFavorites: [...state.myFavorites, payload]}
        default: return{...state}
    }
}

export default reducer;