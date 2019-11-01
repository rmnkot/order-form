import { FETCH_PAPER_FORMAT, SET_PAPER_FORMAT } from "./actionTypes";

export function fetchPaperFormat(resolve) {
    return function(dispatch) {
        fetch(`https://pro-essay-writer.db.rv.ua/api/en/orders/paper_formats`)
            .then(response => response.json())
            .then(data => {  
                dispatch({
                    type: FETCH_PAPER_FORMAT,
                    payload: data
                });
                
                resolve();
            });
    }        
} 

// export function setPaperFormat(e) {
//     return function(dispatch) {
//         dispatch({
//             type: SET_PAPER_FORMAT,
//             payload: e.target.value
//         });
//     }
// }