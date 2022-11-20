import {
    CREATE_FAQ,
    FAQ_QUESTION
} from "../Constats/FaqConstants";


const initialState = {
    faq: {}
}

export const FaqReducer = (state = initialState, action) => {
    switch (action.type) {
        case FAQ_QUESTION:
            return {
                ...state,
                faq: action.payload
            }

            case CREATE_FAQ:
                return {
                    ...state,
                    faq: action.payload
                }

                default:
                    return state;
    }
}