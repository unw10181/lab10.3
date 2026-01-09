import { useTodos } from "../contexts/TodoContext";
import { useFilter } from "../contexts/FilterContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodos();
  const { filter } = useFilter();

  const filteredTodos = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  if (filteredTodos.length === 0) {
    return <p>No todos yet! Add one above.</p>;
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
