import { ListItem } from "@mui/material"

const NYTListItem = ({url, title}) => {
    return (
        <ListItem>
            <a className='menu-link' href={url} title={title}>{title.substr(0, 40)}</a>
        </ListItem>
    )
}

export default NYTListItem;