import './message.css'

const Message = (props) => {
    return (
        <div>
            <h2 className='greattings'>Hello, {props.name}!</h2>
            <p className='hello'>Nice to meet you</p>
        </div>
    )
}

export default Message;