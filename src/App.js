import './App.css';
import './components/message/message'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Homepage from './components/homepage/homepage.js';
import ChatsList from './components/chats_list/chats_list';
import UserProfile from './components/userProfile/user-profile.js';
import { useState } from 'react';
import NotFoundPage from './components/not_found_page/not-found-page';
import Messager from './components/messager/messager';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ThemeContext, themes } from './context/theme';


function App() {

  const [chatsListState, setChatsListState] = useState([
    {name: 'Students', id: 1},
    {name: 'News', id: 2},
    {name: 'Investments', id: 3},
    {name: 'Neighbors', id: 4},
  ])

  const [theme, setTheme] = useState(themes.orange)
  const [toggleState, setToggleState] = useState('orange')


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

  const handleThemeChange = (event, newAlignment) => {
    setToggleState(newAlignment)
    setTheme(themes[newAlignment])
    console.log(theme)
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <div className='toggle-theme'>
          <ToggleButtonGroup
            color="primary"
            value={toggleState}
            exclusive
            onChange={handleThemeChange}
          >
            <ToggleButton value="orange">Orange</ToggleButton>
            <ToggleButton value="white">White</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <Router >
          <Routes>
            <Route path={'/'} element={<Homepage/>}/>
            <Route path={'/chats-list'} element={<ChatsList chatsList={chatsListState} onDeleteChat={onDeleteChat} onAddNewChat={onAddNewChat}/>}/>
            <Route path={'/profile'} element={<UserProfile/>}/>
            <Route path={'/messager/:id'} element={<Messager chatsList={chatsListState}/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>
          </Routes>
        </Router>
      </ThemeContext.Provider>

    </>

  );
}

export default App;
