import { useState } from "react";
import { useTodos } from "../contexts/TodoContext";

const TodoInput = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  const submit = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <div className="todo-input">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button onClick={submit}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
