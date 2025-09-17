import React, { useState } from "react";
import './CustomForm.css';

const CustomForm = ({ tasks, setTasks, title }) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  let itemsPerPage = 3;

  // Add Task
  const handleAddTask = () => {
    if (!task.trim()) {
      showErrorMessage("Please enter a task.");
      return;
    }

    setTasks([task, ...tasks]); // prepend new task
    setTask("");
    setCurrentPage(1); // reset to first page
  };

  // Delete Task
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);

    if ((currentPage - 1) * itemsPerPage >= updatedTasks.length) {
      setCurrentPage(Math.max(currentPage - 1, 1));
    }
  };

  // Start editing
  const startEditTask = (index) => {
    setEditingIndex(index);
    setEditValue(tasks[index]);
  };

  // Save edit
  const saveEditTask = (index) => {
    if (!editValue.trim()) {
      showErrorMessage("Task cannot be empty.");
      return;
    }
    const updatedTasks = [...tasks];
    updatedTasks[index] = editValue;
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditValue("");
  };

  // Error message
  const showErrorMessage = (message) => {
    setError(message);
    setTimeout(() => setError(""), 3000);
  };

  // Pagination
  const totalPages = Math.ceil(tasks.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentTasks = tasks.slice(start, end);

  return (
    <div className='formBody'>
      <div className='formContainer'>
        

        <input
          type='text'
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className='todo-input'
          placeholder='Enter a task...'
        />

        <button className='add-Btn' onClick={handleAddTask}>
          Add task +
        </button>

        <ul className='todo-List'>
          {currentTasks.map((todo, index) => {
            const globalIndex = start + index;
            return (
              <li key={globalIndex} className="todo-item">
                {editingIndex === globalIndex ? (
                  <>
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="todo-text"
                    />
                    <button
                      className="save-btn"
                      onClick={() => saveEditTask(globalIndex)}
                    >
                      Save
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteTask(globalIndex)}
                    >
                      Delete
                    </button>
                  </>
                ) : (
                  <>
                    <span className="todo-text">{todo}</span>
                    <button
                      className="edit-btn"
                      onClick={() => startEditTask(globalIndex)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteTask(globalIndex)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </li>
            );
          })}
        </ul>

        <div className='pagination'>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`pagination-btn ${
                currentPage === i + 1 ? "active" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <div className='error-message'>{error}</div>
      </div>
    </div>
  );
};

export default CustomForm;
