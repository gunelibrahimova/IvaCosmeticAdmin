import { BASE_URL } from "../../api/Config"
import { CREATE_FAQ, FAQ_QUESTION } from "../Constats/FaqConstants"


export const getFaqAction = () => async (dispatch, getState) => {
    let faq = await (await fetch(`${BASE_URL}Faq/getall`)).json()
    dispatch({
        type: FAQ_QUESTION,
        payload: faq
    })
}

export const createFaqAction = (title, description) => async (dispatch, getState) => {
    let data = await fetch(`${BASE_URL}category/add`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            description: description,
            
        })
    }).then(x=> x.json())
    dispatch({
        type: CREATE_FAQ,
        payload: data
    })
}