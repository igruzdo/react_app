import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import './components/message/message'
import MessageList from './components/msg_list/msg_list';
import HeaderMessager from './components/header_messager/header_messager';
import InputForm from './components/inputform/inputform';
import ChatsList from './components/chats_list/chats_list';
import { orange } from '@mui/material/colors';


function App() {

  const [msgListState, setMsgListState] = useState([
    {name: 'Alex', message: 'Hello everybody!', key: 1, date: new Date().toLocaleString(), isRobot: false},
    {name: 'Freddy', message: 'Hello, mate!', key: 2, date: new Date().toLocaleString(), isRobot: false},
    {name: 'Robot', message: 'I am here!', key: 3, date: new Date().toLocaleString(), isRobot: true},
    {name: 'Sarah', message: 'Bonjour!', key: 4, date: new Date().toLocaleString(), isRobot: false},
  ])

  const [chatsListState] = useState([
    {name: 'Students', id: 1},
    {name: 'News', id: 2},
    {name: 'Investments', id: 3},
    {name: 'Тeighbors', id: 4},
  ])

  const outerTheme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      },
    },
  });  

  let msgAuthors = [...new Set([...msgListState.map(item => item.name)])]

  useEffect(()=> {
      (function (name) {
        setTimeout(() => {
          if(name !== "Robot"){
            setMsgListState((state) => {
              return [
                ...state,
                { name: 'Robot', message: `I receved your message, ${name}`, date: new Date().toLocaleString(), isRobot: true, key: state.length + 1}
              ]
            })
          }
        }, 1500)
      })(msgListState[msgListState.length - 1].name)
  }, [msgListState])

  const onchangeHandler = ({name, message}) => {
    setMsgListState((state) => {
      return [
        ...state,
        { name, message, date: new Date().toLocaleString(), isRobot: false, key: state.length + 1}
      ]
    })
  }
  return (
    <ThemeProvider theme={outerTheme}>
      <div className='container'>
        <div className="messeger">
          <ChatsList chatsList={chatsListState}/>
          <div className='messager_main'>
            <HeaderMessager authors={msgAuthors} chatName="Students"/>
            <MessageList msgList={msgListState}/>
            <InputForm onSendMessage={(message) => onchangeHandler(message)}/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
