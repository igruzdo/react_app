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
import NewYorkTimes from './components/new-york-times/new-york-times';


function App() {

  const [theme, setTheme] = useState(themes.orange)
  const [toggleState, setToggleState] = useState('orange')

  const handleThemeChange = (event, newAlignment) => {
    setToggleState(newAlignment)
    setTheme(themes[newAlignment])
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
            <Route path={'/chats-list'} element={<ChatsList/>}/>
            <Route path={'/nytimes'} element={<NewYorkTimes/>}/>
            <Route path={'/profile'} element={<UserProfile/>}/>
            <Route path={'/messager/:id'} element={<Messager/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>
          </Routes>
        </Router>
      </ThemeContext.Provider>

    </>

  );
}

export default App;
