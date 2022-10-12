import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import './messager.css';
import '../message/message'
import MessageList from '../msg_list/msg_list';
import HeaderMessager from '../header_messager/header_messager';
import InputForm from '../inputform/inputform';
import { ThemeContext } from '../../context/theme';
import { useDispatch, useSelector } from 'react-redux';
import * as messageActions from "../../_redux/actions/actionsTypes/messageActionsTypes"
import { addMessageWithFirebase, initMessageTracking } from '../../_redux/actions/actionsCreators/messagesActions';


const Messager = () => {

    const chatsRedux = useSelector((state) => {
        return state.chats.chats
    });
    const dispatch = useDispatch()
    const theme = useContext(ThemeContext)

    const params = useParams();
    const messagesRedux = useSelector((state) => {
        return state.messages.messages[params.id]
    });
    const chatOptions = chatsRedux.find(item => item.chatId === params.id)

    const user = useSelector((state) => state.auth.user)
    const navigate = useNavigate()
    const msgAuthors = messagesRedux?.length > 0 ? [...new Set([...messagesRedux.map(item => item.name)])] : []

    const onchangeHandler = ({name, message}) => {
        dispatch(addMessageWithFirebase(params.id,
            { 
                name: user.displayName,
                message, 
                date: new Date().toLocaleString(), 
                id: `${params.id}-${messagesRedux?.length || 0}-${Date.now()}`
            }
        ))
    }
    
    useEffect(() => {
        dispatch(initMessageTracking())
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <div className='container'>
                <div className="messeger">
                    <div className='messager_main'>
                        <HeaderMessager authors={msgAuthors} chatName={chatOptions?.chatName}/>
                        <MessageList msgList={messagesRedux}/>
                        <InputForm onSendMessage={(message) => onchangeHandler(message)}/>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default Messager