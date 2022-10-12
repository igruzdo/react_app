import * as chatsListActions from "../actions/actionsTypes/chatListActionsTypes"

const initialState = {
    chats: []
}

export const chatsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case chatsListActions.CHANGE_CHATS:
            return {
                ...state,
                chats: [...action.payload]
            }
        default: 
            return state
    }
}