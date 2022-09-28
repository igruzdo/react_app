import { List, Box } from "@mui/material"
import './chats_list.css'
import ChatsListItem from "../chats_list_item/chats_list_item";
import { useState } from 'react';
import { Button, TextField} from '@mui/material'
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { useContext } from "react";
import { ThemeContext } from '../../context/theme';
import { ThemeProvider } from '@mui/material/styles';



const ChatsList = ({chatsList, onAddNewChat, onDeleteChat}) => {

    const [formState, setFormState] = useState('')

    const chats = chatsList.map(item => {
        return (
            <ChatsListItem listItem={item} key={item.id} onDeleteChat={() => onDeleteChat(item.id)}/>
        )
    })

    const theme = useContext(ThemeContext)

    const onChangeNameNewChat = (e) => {
        setFormState(e.target.value)
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
                        <NavLink to='/' className="home-icon-link">
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
                            onClick={() => onAddNewChat(formState)}
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