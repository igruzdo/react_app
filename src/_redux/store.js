import { combineReducers, createStore, applyMiddleware } from "redux";
import { messagesReducer } from './reducers/messagesReducer';
import { chatsListReducer } from './reducers/chatsListReducer';
import { nytReducer } from "./reducers/nytReducer";
import ReduxThunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

const config = {
    key: 'root',
    storage
}

const robotAnswer = store => (dispatch, getState) => action => {

    dispatch(action)

    if(action?.type === 'addMessage') {
        const timeout = setTimeout(() => {
            dispatch({ type: 'addMessage', payload: { 
                name: 'Robot', 
                message: `I receved your message, ${action.payload.name}`, 
                date: new Date().toLocaleString(), 
                isRobot: true, 
                key: action.payload.key + 1, 
                chatId: action.payload.chatId
            }})
        }, 1500);

        return () => {
            clearTimeout(timeout)
        }
    }
}

const reducer = combineReducers({
    messages: messagesReducer,
    chats: chatsListReducer,
    nytNews: nytReducer
})

export const store = createStore(reducer, applyMiddleware(ReduxThunk, robotAnswer));