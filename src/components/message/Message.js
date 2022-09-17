import './message.css'

const Message = ({name, message, date, isRobot}) => {

    let messageClassName = 'message_container'
    let positionClassName = 'position'

    if(isRobot) {
        messageClassName += ' robot'
        positionClassName = ' robot_position'
    }

    return (
        <div className={positionClassName}>
            <div className={messageClassName}>
                <div className='message_header'>
                    <h4 className='author'>{name}</h4>
                    <p className='date'>{date}</p>
                </div>
                <p className='message_txt'>{message}</p>
            </div>
        </div>
    )
}

export default Message;