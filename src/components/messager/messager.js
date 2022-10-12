import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import './messager.css';
import '../message/message'
import MessageList from '../msg_list/msg_list';
import HeaderMessager from '../header_messager/header_messager';
import InputForm from '../inputform/inputform';
import { ThemeContext } from '../../context/theme';
import { useDispatch, useSelector } from 'react-redux';


const Messager = () => {

    const messagesRedux = useSelector((state) => state.messages.messages);
    const chatsRedux = useSelector((state) => state.chats.chats);
    const dispatch = useDispatch()
    const theme = useContext(ThemeContext)

    const params = useParams()
    let messageListByChatId = messagesRedux.filter(msg => msg.chatId === +params.id);

    const chatOptions = chatsRedux.find(item => item.id === +params.id)

    const msgAuthors = messageListByChatId.length > 0 ? [...new Set([...messageListByChatId.map(item => item.name)])] : []
    const onchangeHandler = ({name, message}) => {
        dispatch({ 
            type: 'addMessage', 
            payload: { 
                name, 
                message, 
                date: new Date().toLocaleString(), 
                isRobot: false, key: messagesRedux.length + 1, 
                chatId: +params.id
            }
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <div className='container'>
                <div className="messeger">
                    <div className='messager_main'>
                        <HeaderMessager authors={msgAuthors} chatName={chatOptions.name}/>
                        <MessageList msgList={messagesRedux.filter(msg => msg.chatId === +params.id)}/>
                        <InputForm onSendMessage={(message) => onchangeHandler(message)}/>
                    </div>
                </div>
            </div>
        </ThemeProvider>
      );
}

export default Messager