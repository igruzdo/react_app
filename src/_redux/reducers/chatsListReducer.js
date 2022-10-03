const initialState = {
    chats: [ 
        {name: 'Students', id: 1},
        {name: 'News', id: 2},
        {name: 'Investments', id: 3},
        {name: 'Neighbors', id: 4},
    ]
}

export const chatsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addChat':
            return {
                ...state,
                chats: [
                    ...state.chats,
                    {...action.payload}
                ]
            }
        case 'deleteChat':
            return {
                ...state,
                chats: [
                    ...state.chats.filter(chat => chat.id !== action.payload.id),
                ]
            }
        default: 
            return state
    }
}