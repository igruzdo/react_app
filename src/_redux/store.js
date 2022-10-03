import { combineReducers, createStore } from "redux";
import { messagesReducer } from './reducers/messagesReducer';
import { chatsListReducer } from './reducers/chatsListReducer';

const reducer = combineReducers({
    messages: messagesReducer,
    chats: chatsListReducer
})
export const store = createStore(reducer);