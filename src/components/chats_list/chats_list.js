import { List, Box } from "@mui/material"
import './chats_list.css'
import ChatsListItem from "../chats_list_item/chats_list_item";
import { useState } from 'react';
import { Button, TextField} from '@mui/material'
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';



const ChatsList = ({chatsList, onAddNewChat, onDeleteChat}) => {

    const [formState, setFormState] = useState('')

    const chats = chatsList.map(item => {
        return (
            <ChatsListItem listItem={item} key={item.id} onDeleteChat={() => onDeleteChat(item.id)}/>
        )
    })

    const onChangeNameNewChat = (e) => {
        setFormState(e.target.value)
      }

    return (
        <Box sx={{ 
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            height: '100vh'
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
                    <NavLink to='/'>
                        <Button variant="outlined" startIcon={<HomeIcon/>} className="home-icon-link">Home</Button>
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
                    }}>Add new chat</Button>
                </Box>
            </Box>
        </Box>
    )
}


export default ChatsList;