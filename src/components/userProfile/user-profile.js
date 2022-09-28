import { Box, Button } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';
import './user-profile.css'
import { useContext } from "react";
import { ThemeContext } from '../../context/theme';
import { ThemeProvider } from '@mui/material/styles';


const UserProfile = () => {
    const theme = useContext(ThemeContext)
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
                    justifyContent: 'space-between',
                    position: 'relative'
                }}>
                    <div>
                        <NavLink to='/' className="home-icon-link">
                            <Button variant="outlined" startIcon={<HomeIcon/>}>Home</Button>
                        </NavLink>
                        <h2 className="chat-list__header">Your profile</h2>
                    </div>
                </Box>
            </Box>
        </ThemeProvider>
        
    )
}

export default UserProfile