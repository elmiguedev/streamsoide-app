import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export const TasksPage = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<any>([]);

  const doneTasks = tasks.filter((task: any) => task.done);
  const todoTasks = tasks.filter((task: any) => !task.done);

  const addTask = () => {
    if (newTask) {
      setTasks((tasks: any[]) => [...tasks, { id: tasks.length + 1, name: newTask, done: false }]);
      setNewTask('');
    }
  }

  const checkTask = (id: number) => {
    setTasks((tasks: any[]) => tasks.map((task: any) => task.id === id ? { ...task, done: !task.done } : task));
  }

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedTasks = Array.from(todoTasks);
    const [removed] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, removed);

    setTasks(reorderedTasks);
  };


  return (
    <div className="container pt-4">

      {/* title */}
      <div className="row mb-4">
        <div className="col">
          <h1>Tasks</h1>
        </div>
      </div>

      {/* todo input */}
      <div className="row mb-4">
        <div className="col">
          <div className="form-group form-group-lg">
            <div className="input-group input-group-lg">
              <input type="text"
                className="form-control form-control-lg"
                placeholder="Add a new task"
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && addTask()}
              />
              <button className="btn btn-primary"
                onClick={addTask}
              >Add</button>
            </div>
          </div>
        </div>
      </div>

      {/* todo list */}
      <div className="row mb-4">
        <div className="col">
          <DragDropContext onDragEnd={handleDragEnd}>
            <table className="table">
              <thead className="table-dark ">
                <tr>
                  <th scope="col"></th>
                  <th scope="col">to do</th>
                </tr>
              </thead>
              <Droppable droppableId="droppable">
                {(provided) => (
                  <tbody ref={provided.innerRef} {...provided.droppableProps}>
                    {todoTasks.map((task: any, index: number) => (
                      <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                        {(provided) => (
                          <tr
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <td className="fit">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                value={task.done}
                                onChange={() => checkTask(task.id)}
                              />
                            </td>
                            <td>{task.name}</td>
                          </tr>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </tbody>
                )}
              </Droppable>
            </table>
          </DragDropContext>
        </div>
      </div>

      {/* done list */}
      <div className="row mb-4">
        <div className="col">
          <table className="table">
            <thead className="table-success ">
              <tr>
                <th scope="col"></th>
                <th scope="col">done</th>
              </tr>
            </thead>
            <tbody>
              {doneTasks.map((task: any) => (
                <tr key={task.id} className="text-decoration-line-through">
                  <td className="fit">
                    <input type="checkbox" className="form-check-input" defaultChecked={true} />
                  </td>
                  <td>{task.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}