import { useState } from "react";
import { useTodos } from "../contexts/TodoContext";
import type { Todo } from "../contexts/TodoContext";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { toggleTodo, deleteTodo, editTodo } = useTodos();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  return (
    <li className={todo.completed ? "completed" : ""}>
      {editing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={() => {
            editTodo(todo.id, text);
            setEditing(false);
          }}
        />
      ) : (
        <span onDoubleClick={() => setEditing(true)}>{todo.text}</span>
      )}

      <div>
        <button onClick={() => toggleTodo(todo.id)}>✓</button>
        <button onClick={() => deleteTodo(todo.id)}>✕</button>
      </div>
    </li>
  );
};

export default TodoItem;
