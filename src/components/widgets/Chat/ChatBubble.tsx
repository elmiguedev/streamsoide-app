import { useEffect, useState } from "react";
import "./ChatBubble.scss";

export interface ChatBubbleProps {
  username: string;
  message: string;
  id: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  expireTime?: number;
}

export const ChatBubble = (props: ChatBubbleProps) => {
  const { username, message, onClick, expireTime } = props;
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, expireTime);
    return () => {
      clearTimeout(timer);
    }
  }, [])

  return (
    <>
      {show && <div onClick={onClick} style={props.style} className="chat-bubble" >
        <label>{username}:</label>
        <p>{message}</p>
      </div >}
    </>
  )
}