import { useState } from 'react'
import './inputform.css'

const InputForm = ({onSendMessage}) => {

    const [msgState, setMsgState] = useState({
        name: '',
        message: ''
    })

    const sendMessage = (e) => {
        e.preventDefault();
        onSendMessage(msgState)
    }

    const onValueChange = (e) => {
        setMsgState({
            ...msgState,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className="app-add-form">
            <h3 className='input_header'>Enter your message</h3>
            <form
                className="add-form">
                <input type="text"
                    className="form-control_name"
                    placeholder="Your name"
                    name="name"
                    value={msgState.name}
                    onChange={(e) => onValueChange(e)}
                    />
                <textarea
                    className="form-control_msg"
                    placeholder="Message"
                    name="message"
                    value={msgState.message}
                    onChange={(e) => onValueChange(e)}/>
                <button type="submit"
                    className="btn btn-outline-light"
                    onClick={sendMessage}>Send</button>
            </form>
        </div>
    )
}

export default InputForm;