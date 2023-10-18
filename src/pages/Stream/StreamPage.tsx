import { CurrentTaskWidget } from "../../components/widgets/Tasks/CurrentTaskWidget";
import { TodoTasksWidget } from "../../components/widgets/Tasks/TodoTasksWidget";
import "./style.scss";

export const StreamPage = () => {
  const streamConfig = {
    showCurrenTask: true,
    showTodoList: true,
  }

  return (
    <div >
      <div className="stream-container">
        {streamConfig.showCurrenTask && <CurrentTaskWidget left={1470} top={50} />}
        {streamConfig.showTodoList && <TodoTasksWidget left={1470} top={50} />}
      </div>
    </div>
  )
}