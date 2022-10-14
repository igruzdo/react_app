import { List, Box } from "@mui/material"
import './chats_list.css'
import ChatsListItem from "../chats_list_item/chats_list_item";
import { useState } from 'react';
import { Button, TextField} from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { useContext, useEffect } from "react";
import { ThemeContext } from '../../context/theme';
import { ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import * as chatsListActions from "../../_redux/actions/actionsTypes/chatListActionsTypes"
import { addChatWithFirebase, deleteChatWithFirebase, initChatTracking } from "../../_redux/actions/actionsCreators/chatsListActions";



const ChatsList = () => {

    const navigate = useNavigate()
    const [formState, setFormState] = useState('')

    // const chatListRedux = useSelector((state) => state.chats.chats);
    const chatListRedux = useSelector((state) => {
        return state.chats.chats
    });
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch()


    const chats = chatListRedux.map(item => {
        return (
            <ChatsListItem listItem={{ id: item.chatId, name: item.chatName }} key={item.chatId} onDeleteChat={() => dispatch(deleteChatWithFirebase(item.chatId))}/>
        )
    })

    const theme = useContext(ThemeContext)

    const onChangeNameNewChat = (e) => {
        setFormState(e.target.value)
    }

    useEffect(() => {
        dispatch(initChatTracking())
    }, [])

    const onAddChat = () => {
        dispatch(addChatWithFirebase({
            name: formState, 
            id: `${Math.floor(Math.random() * 1000)}-${chatListRedux.length || 0}-${Date.now()}`,
        }))
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ 
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            height: '95vh'
            }}>
                <Box sx={{ 
                    bgcolor: 'rgb(125, 202, 238)', 
                    borderRight: "1px solid #5d63fc", 
                    width: 550,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'space-between'
                }}>
                    <div className="header__container">
                        <NavLink to='/home' className="home-icon-link">
                            <Button variant="outlined" startIcon={<HomeIcon/>}>Home</Button>
                        </NavLink>
                        <h2 className="chat-list__header">Chat list</h2>
                        <List>
                            {chats}
                        </List>
                    </div>
                    <Box
                        sx={{
                            borderTop: '1px solid black',
                            display: 'flex',
                            flexDirection: 'column',
                            height:200,
                            padding: "0 20px",
                            backgroundColor: '#e7e7e7',
                        }}
                    >
                        <h4>Add new chat</h4>
                            <TextField
                                id="outlined-name"
                                label="Name of chat"
                                name="name"
                                size="small"
                                autoFocus
                                fullWidth
                                required
                                value={formState}
                                onChange={onChangeNameNewChat}
                            />
                        <Button variant="contained"
                            onClick={onAddChat}
                            sx={{
                                marginTop: '20px'
                            }}>
                                Add new chat
                        </Button>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}


export default ChatsList;