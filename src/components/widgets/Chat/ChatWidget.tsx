import { useEffect, useState } from "react"
import { ChatBubble } from "./ChatBubble"
import tmi from "tmi.js";

const WIDGET_WIDTH = 500
const MESSAGE_DURATION = 10000

export interface ChatWidgetProps {
  left?: number,
  top?: number,
  bottom?: number,
  right?: number,
}

export const ChatWidget = (props: ChatWidgetProps) => {
  const { left, top, bottom, right } = props
  const [messages, setMessages] = useState<any[]>([]);
  const [client] = useState(new tmi.client({
    channels: ["iamcristinini"],

  }));

  const removeMessage = (id: string) => {
    const filtered = messages.filter((message) => message.id !== id);
    setMessages(filtered);
  }

  const addMessage = (message: any) => {
    setMessages([...messages, message].slice(-8));
  }

  useEffect(() => {
    client.on("message", (channel: any, tags: any, message: any, self: any) => {
      addMessage({
        id: tags["tmi-sent-ts"] + Math.random().toString(),
        username: tags.username,
        message
      });
    })

  }, [addMessage, messages]);

  useEffect(() => {
    client.connect();

  }, []);

  return (
    <>
      <button onClick={addMessage}>Agregar</button>
      <div className="d-flex flex-column justify-content-end align-items-start" style={{ height: 540, maxWidth: WIDGET_WIDTH, top, left, right, bottom, position: 'absolute' }}>
        {messages.map((message: any) => (
          <ChatBubble
            key={"chat-bubblt" + message.id}
            onClick={() => removeMessage(message.id)}
            expireTime={MESSAGE_DURATION}
            style={{ marginBottom: 10 }}
            username={message.username}
            message={message.message}
            id={message.id}
          />
        ))}
      </div>
    </>
  )
}