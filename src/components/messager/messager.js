import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './messager.css';
import '../message/message'
import MessageList from '../msg_list/msg_list';
import HeaderMessager from '../header_messager/header_messager';
import InputForm from '../inputform/inputform';
import { orange } from '@mui/material/colors';


const Messager = ({chatsList}) => {

    const [msgListState, setMsgListState] = useState([])

        const outerTheme = createTheme({
        palette: {
            primary: {
            main: orange[500],
            },
        },
    });

    const params = useParams()
    const messageListByChatId = msgListState.filter(msg => msg.chatId === +params.id)
    const chatOptions = chatsList.find(item => item.id === +params.id)

    let msgAuthors = messageListByChatId.length > 0 ? [...new Set([...messageListByChatId.map(item => item.name)])] : []

    useEffect(()=> {
        if(messageListByChatId[messageListByChatId.length - 1]?.name) {
            (function (name) {
                setTimeout(() => {
                    if(name !== "Robot"){
                    setMsgListState((state) => {
                        return [
                        ...state,
                        { name: 'Robot', message: `I receved your message, ${name}`, date: new Date().toLocaleString(), isRobot: true, key: state.length + 1, chatId: params.id}
                        ]
                    })
                    }
                }, 1500)
            })(messageListByChatId[messageListByChatId.length - 1].name)
        }
    }, [msgListState])

    const onchangeHandler = ({name, message}) => {
        setMsgListState((state) => {
            return [
            ...state,
            { name, message, date: new Date().toLocaleString(), isRobot: false, key: state.length + 1, chatId: params.id}
            ]
        })
    }

    return (
        <ThemeProvider theme={outerTheme}>
            <div className='container'>
                <div className="messeger">
                    <div className='messager_main'>
                        <HeaderMessager authors={msgAuthors} chatName={chatOptions.name}/>
                        <MessageList msgList={messageListByChatId}/>
                        <InputForm onSendMessage={(message) => onchangeHandler(message)}/>
                    </div>
                </div>
            </div>
        </ThemeProvider>
      );
}

export default Messager