import { ListItem, Divider, Button } from "@mui/material"
import { NavLink } from 'react-router-dom';
import './chats_list_item.css'



const ChatsListItem = ({listItem, onDeleteChat}) => {
    return (
        <>
            <Divider />
                <ListItem sx={{ padding: 0 }}>
                    <NavLink className='chat-link' to={`/messager/${listItem.id}`}>{listItem.name}</NavLink>
                    <Button color="warning" variant="text" onClick={onDeleteChat}>Delete</Button>
                </ListItem>
            <Divider/>
        </>
    )
}


export default ChatsListItem;