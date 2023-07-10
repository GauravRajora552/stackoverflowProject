
const ChatMessage = ({ message }) => {
  console.log(message)
  return (

    <div className={`chat-message ${message.user === 'gpt' && 'chatgpt'}`}>
      <div className={`message ${message.user === 'gpt' && 'chatgpt'}`}>
        {
          message.user === 'gpt' ? `
              Ai : ${message.message}              
            ` :` 
              User : ${message.message}
            `
        }
      </div>
    </div>
  )
}

export default ChatMessage