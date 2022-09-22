import { List, Box } from "@mui/material"
import './chats_list.css'
import ChatsListItem from "../chats_list_item/chats_list_item";



const ChatsList = ({chatsList}) => {

    const chats = chatsList.map(item => {
        return (
            <ChatsListItem listItem={item} key={item.id}/>
        )
    })


    return (
        <Box sx={{ bgcolor: 'rgb(125, 202, 238)', borderRight: "1px solid #5d63fc" }}>
            <h4 className="chat-list__header">Chat list</h4>
            <List>
                {chats}
            </List>
        </Box>
        
    )
}


export default ChatsList;