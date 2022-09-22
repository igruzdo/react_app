import { ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material"
import InboxIcon from '@mui/icons-material/Inbox';
import { Fragment } from "react";



const ChatsListItem = ({listItem}) => {
    return (
        <>
            <Divider />
                <ListItem sx={{ padding: 0 }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary={listItem.name}/>
                    </ListItemButton>
                </ListItem>
            <Divider/>
        </>
        
    )
}


export default ChatsListItem;