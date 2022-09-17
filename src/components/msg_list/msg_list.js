import './msg_list.css'
import Message from '../message/message';

const MessageList = ({msgList}) => {

    const messages = () => {
        return msgList.map(item => {
          return (
            <Message {...item}/>
          )
        })
      }

    return (
        <div className='messages_blok'>
            {messages()}
        </div>
    )
}

export default MessageList;