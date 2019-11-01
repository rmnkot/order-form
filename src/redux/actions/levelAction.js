import { FETCH_LEVEL, SET_LEVEL } from "./actionTypes";

export function fetchLevel(resolve) {
    return function(dispatch) {
        fetch(`https://pro-essay-writer.db.rv.ua/api/en/orders/academic_levels`)
            .then(response => response.json())
            .then(data => {  
                dispatch({
                    type: FETCH_LEVEL,
                    payload: data
                });
                
                resolve();
            });
    }        
} 

// export function setLevel(e) {
//     return function(dispatch) {
//         dispatch({
//             type: SET_LEVEL,
//             payload: e.target.value
//         });
//     }
// }