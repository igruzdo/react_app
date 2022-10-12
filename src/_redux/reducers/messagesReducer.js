import * as messageActions from "../actions/actionsTypes/messageActionsTypes";

const initialState = {
    messages: {}
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case messageActions.CHANGE_MESSAGES:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.chatId]: action.payload.messages
                }
            }
        default: 
            return state
    }
}