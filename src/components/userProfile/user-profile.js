import { Box, Button } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import { NavLink, useNavigate } from 'react-router-dom';
import './user-profile.css'
import { useContext } from "react";
import { ThemeContext } from '../../context/theme';
import { ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../../_redux/reducers/authReducer";
import { useEffect } from "react";


const UserProfile = () => {
    const theme = useContext(ThemeContext);
    const navigate = useNavigate();

    const user = useSelector((state) => state.auth.user);

    const dispatch = useDispatch();

    const handleLogout = async () => {
        if(user) {
            await dispatch(logoutInitiate());
            navigate('/');
        }
    }

    useEffect(() => {
        if(!user) {
            navigate('/')
        }
    }, [])

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
                        <NavLink to='/home' className="home-icon-link">
                            <Button variant="outlined" startIcon={<HomeIcon/>}>Home</Button>
                        </NavLink>
                        <h2 className="chat-list__header">Your profile</h2>
                        <Box
                            sx={{ 
                                padding: "0 20px"
                             }}
                        >
                            <p>Name: {user.displayName}</p>
                            <Button variant="contained" onClick={handleLogout}>Log out</Button>
                        </Box>
                    </div>
                </Box>
            </Box>
        </ThemeProvider>
        
    )
}

export default UserProfile