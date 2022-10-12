
import { Box, Button, TextField} from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginInitiate, registerInitiate } from '../../_redux/reducers/authReducer';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './auth.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AuthPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [name, setName] = useState('');

    const [statusAuth, setStatusAuth] = useState('login');

    const allState = useSelector((state) => state.auth.user)

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault();
        if(password !== passwordConfirm || !email || !name || !password) {
            return
        }
       await dispatch(registerInitiate(email, password, name))
       navigate('/home')
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        if(!email || !password) {
            return
        }
        await dispatch(loginInitiate(email, password))
        navigate('/home')
    }

    const handleChangeStatus = (event, status) => {
        setStatusAuth(status)
    };

    return (
        <Box sx={{ 
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            height: '95vh',
        }}>
            <Box sx={{ 
                bgcolor: 'rgb(125, 202, 238)', 
                borderRight: "1px solid #5d63fc", 
                width: 550,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                alignItems: 'center',
            }}>
                <h2>Sign up/in page</h2>
                <ToggleButtonGroup
                    color="primary"
                    value={statusAuth}
                    exclusive
                    onChange={handleChangeStatus}
                >
                    <ToggleButton value='register'>Sign up</ToggleButton>
                    <ToggleButton value="login">Sign in</ToggleButton>
                </ToggleButtonGroup>
                <Box sx={{ 
                    padding: "0 20px"
                 }}>
                    { statusAuth === 'register' ?
                        <TextField
                            sx={{ 
                                marginTop: "20px"
                            }}
                            className="register-input"
                            label="Name"
                            name="name"
                            size="small"
                            autoFocus
                            fullWidth
                            required
                            onChange={(e) => setName(e.target.value)}
                        /> : null
                    }
                    <TextField
                        sx={{ 
                            marginTop: "20px"
                        }}
                        className="register-input"
                        label="Email"
                        name="email"
                        size="small"
                        autoFocus
                        fullWidth
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        className="register-input"
                        type="password"
                        label="Password"
                        name="password"
                        size="small"
                        required
                        margin="normal"
                        fullWidth
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    { statusAuth === 'register' ?
                        <TextField
                            className="register-input"
                            type="password"
                            label="Confirm password"
                            name="confirm"
                            size="small"
                            required
                            margin="normal"
                            fullWidth
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        /> : null
                    }
                    {
                         statusAuth === 'register' ? 
                         <Button variant="contained" onClick={handleRegister}>Register</Button>
                         :
                         <Button variant="contained" onClick={handleLogin}>Login</Button>
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default AuthPage