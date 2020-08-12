import React, { createContext, useState, useContext } from "react";
import { v4 } from "uuid";

const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) =>
    setTasks([
      ...tasks,
      {
        id: v4(),
        task,
        complete: false,
      },
    ]);
  
  const deleteTask = (id) => {        
    setTasks(
      tasks.map((list) => ({
         ...list, lastUpdated: Date.now() })
      ).filter((list) => list.id !== id));
  }
  
  // 5
  const setStatusTask = (id, status) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, complete: status } : t)));
  };

  // 6
  return (
    <TaskContext.Provider value={{ tasks, addTask, setStatusTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}
