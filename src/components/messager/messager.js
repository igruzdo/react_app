import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import './messager.css';
import '../message/message'
import MessageList from '../msg_list/msg_list';
import HeaderMessager from '../header_messager/header_messager';
import InputForm from '../inputform/inputform';
import { ThemeContext } from '../../context/theme';


const Messager = ({chatsList}) => {

    const [msgListState, setMsgListState] = useState([
        { name: 'Alex', message: 'Hello chat #1', date: new Date().toLocaleString(), isRobot: false, key: 1, chatId: 1},
        { name: 'Fred', message: 'Hello chat #1', date: new Date().toLocaleString(), isRobot: false, key: 2, chatId: 1},
        { name: 'Bob', message: 'Hello chat #2', date: new Date().toLocaleString(), isRobot: false, key: 3, chatId: 2},
        { name: 'Alan', message: 'Hello chat #2', date: new Date().toLocaleString(), isRobot: false, key: 4, chatId: 2},
        { name: 'Lena', message: 'Hello chat #3', date: new Date().toLocaleString(), isRobot: false, key: 5, chatId: 3},
        { name: 'Koctya', message: 'Hello chat #3', date: new Date().toLocaleString(), isRobot: false, key: 6, chatId: 3},
        { name: 'Frensis', message: 'Hello chat #4', date: new Date().toLocaleString(), isRobot: false, key: 7, chatId: 4},
        { name: 'Bill', message: 'Hello chat #4', date: new Date().toLocaleString(), isRobot: false, key: 8, chatId: 4},
    ])

    const theme = useContext(ThemeContext)

    const params = useParams()
    let messageListByChatId = msgListState.filter(msg => msg.chatId === +params.id);

    const chatOptions = chatsList.find(item => item.id === +params.id)

    const msgAuthors = messageListByChatId.length > 0 ? [...new Set([...messageListByChatId.map(item => item.name)])] : []

    useEffect(()=> {
        if(messageListByChatId[messageListByChatId.length - 1]?.name) {
            (function (name) {
                setTimeout(() => {
                    if(name !== "Robot"){
                    setMsgListState((state) => {
                        return [
                        ...state,
                        { name: 'Robot', message: `I receved your message, ${name}`, date: new Date().toLocaleString(), isRobot: true, key: state.length + 1, chatId: +params.id}
                        ]
                    })
                    }
                }, 1500)
            })(messageListByChatId[messageListByChatId.length - 1].name)
        }
    }, [messageListByChatId])

    const onchangeHandler = ({name, message}) => {
        setMsgListState((state) => {
            return [
            ...state,
            { name, message, date: new Date().toLocaleString(), isRobot: false, key: state.length + 1, chatId: +params.id}
            ]
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <div className='container'>
                <div className="messeger">
                    <div className='messager_main'>
                        <HeaderMessager authors={msgAuthors} chatName={chatOptions.name}/>
                        <MessageList msgList={msgListState.filter(msg => msg.chatId === +params.id)}/>
                        <InputForm onSendMessage={(message) => onchangeHandler(message)}/>
                    </div>
                </div>
            </div>
        </ThemeProvider>
      );
}

export default Messager