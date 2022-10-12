
import { NavLink } from 'react-router-dom';
import { Box } from "@mui/material"
import './homepage.css'

const Homepage = () => {
    return (
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
                alignItems: 'center'                
            }}>
                <h2>Home page</h2>
                <NavLink className='menu-link' to='/chats-list' style={({isActive}) => ({color: isActive ? 'red' : 'black'})}>Chats list</NavLink>
                <NavLink className='menu-link' to='/nytimes' style={({isActive}) => ({color: isActive ? 'red' : 'black'})}>New York Times</NavLink>
                <NavLink className='menu-link' to='/profile' style={({isActive}) => ({color: isActive ? 'red' : 'black'})}>Profile</NavLink>
            </Box>
        </Box>
    )
}

export default Homepage