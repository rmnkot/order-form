import { FETCH_WORK_TYPE, SET_WORK_TYPE } from "./actionTypes";

export default function fetchWorkType(resolve) {
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