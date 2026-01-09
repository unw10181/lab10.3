import { useState } from "react";
import { useTodos } from "../contexts/TodoContext";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleTodo, deleteTodo, editTodo } = useTodos();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleBlur = () => {
    if (text.trim() === "") {
      setText(todo.text); // Reset if empty
    } else {
      editTodo(todo.id, text);
    }
    setEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {editing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <span onDoubleClick={() => setEditing(true)}>{todo.text}</span>
      )}

      <div className="todo-actions">
        <button onClick={() => toggleTodo(todo.id)}>✓</button>
        <button onClick={() => deleteTodo(todo.id)}>✕</button>
      </div>
    </li>
  );
};

export default TodoItem;
