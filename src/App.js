import './App.css';
import './components/message/message'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Homepage from './components/homepage/homepage.js';
import ChatsList from './components/chats_list/chats_list';
import UserProfile from './components/userProfile/user-profile.js';
import { useState } from 'react';
import NotFoundPage from './components/not_found_page/not-found-page';
import Messager from './components/messager/messager';


function App() {

  const [chatsListState, setChatsListState] = useState([
    {name: 'Students', id: 1},
    {name: 'News', id: 2},
    {name: 'Investments', id: 3},
    {name: 'Neighbors', id: 4},
])


  const onDeleteChat = (id) => {
    const newState = chatsListState.filter(item => item.id !== id)
    setChatsListState(newState)
  }

  const onAddNewChat = (name) => {
    const maxId = chatsListState.map(item => item.id).sort((a, b) => b - a)[0]
    setChatsListState((state) => {
        return [...state, {name: name, id: maxId + 1}]
    })
  }

  return (
    <Router >
        <Routes>
          <Route path={'/'} element={<Homepage/>}/>
          <Route path={'/chats-list'} element={<ChatsList chatsList={chatsListState} onDeleteChat={onDeleteChat} onAddNewChat={onAddNewChat}/>}/>
          <Route path={'/profile'} element={<UserProfile/>}/>
          <Route path={'/messager/:id'} element={<Messager chatsList={chatsListState}/>}/>
          <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
