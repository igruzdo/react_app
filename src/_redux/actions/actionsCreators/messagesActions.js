import { db } from "../../../services/firebase";
import * as messageActions from '../actionsTypes/messageActionsTypes'

const getPayloadFromSnapshot = (snapshot) => {
    const messages = [];
    snapshot.forEach((mes) => {
        messages.push(mes.val());
    });
    return {
        chatId: snapshot.key,
        messages
    }
}

export const addMessageWithFirebase = (chatId, message) => async () => {
    db.ref("messages").child(chatId).child(message.id).set(message);
};

export const initMessageTracking = () => (dispatch) => {
    db.ref("messages").on("child_changed", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
        dispatch({
            type: messageActions.CHANGE_MESSAGES,
            payload,
        });
    });
    db.ref("messages").on("child_added", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
        dispatch({
            type: messageActions.CHANGE_MESSAGES,
            payload,
        });
    });
};