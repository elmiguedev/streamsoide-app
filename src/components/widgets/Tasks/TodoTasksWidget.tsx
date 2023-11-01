import { useState } from "react"
import { Task } from "../../../domain/task"

const WIDGET_WIDTH = 400;

export interface TodoTasksWidgetProps {
  left?: number,
  top?: number,
  bottom?: number,
  right?: number,
}
export const TodoTasksWidget = (props: TodoTasksWidgetProps) => {
  const { left, top, bottom, right } = props
  const [tasks] = useState<Task[]>([
    { id: 1, description: 'Crear mensajes de movimiento (player)', done: true },
    { id: 2, description: 'Refactorear codigo de server', done: true },
    { id: 3, description: 'Agregar animación de movimiento (tween)', done: false },
  ])


  return (
    <div className="card text-bg-light mb-3" style={{ maxWidth: WIDGET_WIDTH, top, left, right, bottom }}>
      <div className="card-body">
        {tasks.map(task => (
          <div className="row" key={task.id}>
            <div className="col d-flex flex-row">
              <div className="form-check fs-4">
                <input className="form-check-input" type="checkbox" readOnly={true} defaultChecked={task.done} />
                <label className={`form-check-label ${task.done && 'text-decoration-line-through'}`}>
                  {task.description}
                </label>
              </div>
            </div>
          </div>
        ))}

        {/* <h5 className="card-title">Light card title</h5> */}
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
      </div>
    </div>
  )
}