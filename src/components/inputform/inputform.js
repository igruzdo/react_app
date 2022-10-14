import { useState } from 'react'
import './inputform.css'

import { Box, Button, TextField} from '@mui/material'
import MessageIcon from '@mui/icons-material/Message';
import { useSelector } from 'react-redux';

const InputForm = ({onSendMessage}) => {

    const [msgState, setMsgState] = useState({
        message: ''
    })

    const user = useSelector((state) => state.auth.user)

    const sendMessage = (e) => {
        e.preventDefault();
        if(msgState.message === '') return
        onSendMessage({...msgState, name: user.displayName })
    }

    const onValueChange = (e) => {
        setMsgState({
            ...msgState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Box
            sx={{
                borderTop: '1px solid black',
                display: 'flex',
                flexDirection: 'column',
                height: 300,
                padding: "0 20px",
                backgroundColor: '#e7e7e7',
            }}
        >
            <h4>Message form</h4>
                <TextField
                    id="outlined-message"
                    label="Message"
                    name="message"
                    size="small"
                    multiline
                    rows={3}
                    required
                    margin="normal"
                    fullWidth
                    helperText="Enter your message"
                    onChange={onValueChange}
                />
            <Button variant="contained" startIcon={<MessageIcon/>} onClick={sendMessage}>Send message</Button>
        </Box>
    )
}

export default InputForm;