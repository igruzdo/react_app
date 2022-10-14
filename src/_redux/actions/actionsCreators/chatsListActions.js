import { db } from "../../../services/firebase";
import * as chatsActions from '../actionsTypes/chatListActionsTypes'

const getPayloadFromSnapshot = (snapshot) => {
    const chats = [];
    snapshot.forEach((mes) => {
        chats.push({
            chatName: mes.val(),
            chatId: mes.key
        });
    });
    return chats
 
}

export const addChatWithFirebase = (chat) => async () => {
    db.ref("chats").child("chats_list").child(chat.id).set(chat.name);
};

export const deleteChatWithFirebase = (chatId) => async () => {
    db.ref("chats").child("chats_list").child(chatId).remove();
};

export const initChatTracking = () => (dispatch) => {
    db.ref("chats").on("child_changed", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
        dispatch({
            type: chatsActions.CHANGE_CHATS,
            payload,
        });
    });
    db.ref("chats").on("child_added", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
        dispatch({
            type: chatsActions.CHANGE_CHATS,
            payload,
        });
    });
};