import React, { useContext, useEffect } from 'react'
import GroupContext from '../../contexts/GroupContext'
import MessageItem from './MessageItem';

export default function Messages() {

  const { messages, fetchMessages, currentGroup } = useContext(GroupContext);

  useEffect(() => {
    fetchMessages();

  }, [currentGroup, messages])

  return (
    <>
      <div style={{ height: '83%', backgroundColor: '#dcdef7', overflowY: 'auto' }}>
        {messages.map((message) => {
          return <MessageItem key={message._id} message={message} />
        })}
      </div>
    </>
  )
}
