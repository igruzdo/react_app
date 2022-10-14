import './msg_list.css'
import Message from '../message/message.js';

const MessageList = ({msgList}) => {

    const messages = () => {
        return msgList?.map(item => {
          return (
            <Message {...item} key={item.id}/>
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