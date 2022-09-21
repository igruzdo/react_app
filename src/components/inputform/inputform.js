import { useState } from 'react'
import './inputform.css'

import { Box, Button, TextField} from '@mui/material'
import MessageIcon from '@mui/icons-material/Message';

const InputForm = ({onSendMessage}) => {

    const [msgState, setMsgState] = useState({
        name: '',
        message: ''
    })

    const sendMessage = (e) => {
        e.preventDefault();
        if(msgState.name === '' && msgState.message === '') return
        onSendMessage(msgState)
    }

    const onValueChange = (e) => {
        console.log(e)
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
                    id="outlined-name"
                    label="Name"
                    name="name"
                    size="small"
                    autoFocus={true}
                    fullWidth={true}
                    required={true}
                    value={msgState.name}
                    helperText="Please enter your name"
                    onChange={onValueChange}
                />
                <TextField
                    id="outlined-message"
                    label="Message"
                    name="message"
                    size="small"
                    multiline={true}
                    rows={3}
                    required={true}
                    margin="normal"
                    fullWidth={true}
                    helperText="Enter your message"
                    onChange={onValueChange}
                />
            <Button variant="contained" startIcon={<MessageIcon/>} onClick={sendMessage}>Send message</Button>
        </Box>
    )
}

export default InputForm;