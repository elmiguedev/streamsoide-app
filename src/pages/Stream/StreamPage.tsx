import { ChatWidget } from "../../components/widgets/Chat/ChatWidget";
import { CurrentTaskWidget } from "../../components/widgets/Tasks/CurrentTaskWidget";
import { TodoTasksWidget } from "../../components/widgets/Tasks/TodoTasksWidget";
import "./style.scss";

export const StreamPage = () => {
  const streamConfig = {
    showCurrenTask: false,
    showTodoList: false,
    showChat: true
  }

  return (
    <div >
      <div className="stream-container">
        {streamConfig.showChat && <ChatWidget left={50} top={490} />}
        {streamConfig.showCurrenTask && <CurrentTaskWidget left={1470} top={50} />}
        {streamConfig.showTodoList && <TodoTasksWidget left={1470} top={50} />}
      </div>
    </div>
  )
}