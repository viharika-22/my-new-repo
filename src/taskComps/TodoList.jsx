import { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";

export default function ToDoList() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  function handelAddTask() {
    if (task.trim() === "") return;
    setTodoList((prev) => [...prev, { text: task, completed: false }]);
    setTask("");
  }

  function handelDelTask(index) {
    setTodoList(todoList.filter((_, i) => i !== index));
  }

  function toggleCompleted(i) {
    const updatedList = [...todoList];
    updatedList[i].completed = true;
    setTodoList(updatedList);
  }

  
  const styles = {
    app: {
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "2rem",
    },
    h3:{
padding:"12px",
// boxShadow:"0 4px 6px rgba(0,0,0,0.1)"
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    inputCont: {
      display: "flex",
      gap: "0.5rem",
      marginBottom: "1rem",
    },
    input: {
      height: "2rem",
      width: "12rem",
      padding: "0.5rem",
      fontSize: "1rem",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    addBtn: {
      //   height: "2.5rem",
      width: "3rem",
      backgroundColor: "#4caf50",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    tasks: {
      width: "100%",
      maxWidth: "400px",
    },
    taskWrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      padding: "0.5rem 1rem",
      margin: "0.3rem 0",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      transition: "all 0.25s ease",
    },
    taskWrapperHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    },
    listItem: (completed) => ({
      listStyle: "none",
      flex: 1,
      textAlign: "left",
      textDecoration: completed ? "line-through" : "none",
      color: completed ? "#999" : "black",
    }),
    delBtn: (disabled) => ({
      background: "transparent",
      border: "none",
      color: disabled ? "#ccc" : "#d32f2f",
      fontSize: "1.2rem",
      cursor: disabled ? "not-allowed" : "pointer",
    }),
  };

  return (
    <div style={styles.app}>
      <h3 style={styles.h3}>ToDo List</h3>
      <div style={styles.container}>
        <div style={styles.inputCont}>
          <input
            type="text"
            placeholder="Enter your next task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={styles.input}
          />
          <button onClick={handelAddTask} style={styles.addBtn}>
            Add <FaPlus />
          </button>
        </div>
        <div style={styles.tasks}>
          {todoList.map((item, i) => (
            <div
              style={styles.taskWrapper}
              key={i}
              onMouseOver={(e) =>
                Object.assign(e.currentTarget.style, styles.taskWrapperHover)
              }
              onMouseOut={(e) =>
                Object.assign(e.currentTarget.style, styles.taskWrapper)
              }
            >
              <li
                style={styles.listItem(item.completed)}
                title="Double-click to mark as complete"
                onDoubleClick={() => toggleCompleted(i)}
              >
                {item.text}
              </li>
              <button
                onClick={() => handelDelTask(i)}
                disabled={item.completed}
                style={styles.delBtn(item.completed)}
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
