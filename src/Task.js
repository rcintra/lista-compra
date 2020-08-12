import React from "react";
import { useTasks } from "./TaskProvider";
import {ReactComponent as DeleteSVG} from './assets/imagens/delete.svg';

export default function Task({ id, task, complete }) {
  const { setStatusTask } = useTasks();
  const { deleteTask } = useTasks();
  const checkTask = (e) => setStatusTask(id, e.target.checked);  
  const remove = (e) => deleteTask(id);

  return (
    <tr>
      <td>        
        <input type="checkbox" onChange={checkTask} />
      </td>
      <td>
        <span className={complete ? "task-done" : ""}>{task}</span>
      </td>
      <td>
        <DeleteSVG onClick={remove} />
      </td>
    </tr>
  );
}
