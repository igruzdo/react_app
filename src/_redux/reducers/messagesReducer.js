const initialState = {
    messages: [
        { name: 'Alex', message: 'Hello chat #1', date: new Date().toLocaleString(), isRobot: false, key: 1, chatId: 1},
        { name: 'Fred', message: 'Hello chat #1', date: new Date().toLocaleString(), isRobot: false, key: 2, chatId: 1},
        { name: 'Bob', message: 'Hello chat #2', date: new Date().toLocaleString(), isRobot: false, key: 3, chatId: 2},
        { name: 'Alan', message: 'Hello chat #2', date: new Date().toLocaleString(), isRobot: false, key: 4, chatId: 2},
        { name: 'Lena', message: 'Hello chat #3', date: new Date().toLocaleString(), isRobot: false, key: 5, chatId: 3},
        { name: 'Koctya', message: 'Hello chat #3', date: new Date().toLocaleString(), isRobot: false, key: 6, chatId: 3},
        { name: 'Frensis', message: 'Hello chat #4', date: new Date().toLocaleString(), isRobot: false, key: 7, chatId: 4},
        { name: 'Bill', message: 'Hello chat #4', date: new Date().toLocaleString(), isRobot: false, key: 8, chatId: 4},
    ]
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addMessage':
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {...action.payload}
                ]
            }
        default: 
            return state
    }
}