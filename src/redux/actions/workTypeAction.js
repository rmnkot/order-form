import { FETCH_WORK_TYPE, SET_WORK_TYPE } from "./actionTypes";

export function fetchWorkType(resolve) {
    return function(dispatch) {
        fetch(`https://pro-essay-writer.db.rv.ua/api/en/sites/categories/1/orders/work_types`)
            .then(response => response.json())
            .then(data => {  
                dispatch({
                    type: FETCH_WORK_TYPE,
                    payload: data
                });

                resolve();
            });
    }        
} 

export function setWorkType(e) {
    return function(dispatch) {
        dispatch({
            type: SET_WORK_TYPE,
            payload: e.target.value
        });
    }
}