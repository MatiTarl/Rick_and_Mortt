import { ADD_FAV, REMOVE_FAV } from "./actions-type";

export function addFav(charachter){
    return{
        type: ADD_FAV, 
        payload: charachter
    }
}

export function removeFav (id) {
    return{
        type: REMOVE_FAV, 
        payload: id
    }
}