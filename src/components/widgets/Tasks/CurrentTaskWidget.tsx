import { useState } from "react"
import { Task } from "../../../domain/task"

const WIDGET_WIDTH = 400;

export interface CurrentTaskWidgetProps {
  left?: number,
  top?: number,
  bottom?: number,
  right?: number,
}
export const CurrentTaskWidget = (props: CurrentTaskWidgetProps) => {
  const { left, top, bottom, right } = props
  const [task] = useState<Task>({
    id: 1,
    description: 'Crear mensajes de movimiento (player)',
    done: true
  });

  return (
    <div className="card text-bg-light mb-3" style={{ maxWidth: WIDGET_WIDTH, top, left, right, bottom }}>
      <div className="card-body">
        <div className="row">
          <div className="col d-flex flex-row">
            <div className="form-check fs-4">
              <input className="form-check-input" type="checkbox" readOnly={true} defaultChecked={task.done} />
              <label className={`form-check-label ${task.done && 'text-decoration-line-through'}`}>
                {task.description}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}