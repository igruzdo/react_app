import { useEffect, useState } from 'react';
import './App.css';
import './components/message/message'
import MessageList from './components/msg_list/msg_list';
import HeaderMessager from './components/header_messager/header_messager';
import InputForm from './components/inputform/inputform';


function App() {

  const [msgListState, setMsgListState] = useState([
    {name: 'Alex', message: 'Hello everybody!', key: 1, date: new Date().toLocaleString(), isRobot: false},
    {name: 'Freddy', message: 'Hello, mate!', key: 2, date: new Date().toLocaleString(), isRobot: false},
    {name: 'Robot', message: 'I am here!', key: 3, date: new Date().toLocaleString(), isRobot: true},
    {name: 'Sarah', message: 'Bonjour!', key: 4, date: new Date().toLocaleString(), isRobot: false},
  ])

  

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
    <div className='container'>
      <div className='messager'>
        <HeaderMessager authors={msgAuthors} chatName="Students"/>
        <MessageList msgList={msgListState}/>
        <InputForm onSendMessage={(message) => onchangeHandler(message)}/>
      </div>
    </div>
  );
}

export default App;
