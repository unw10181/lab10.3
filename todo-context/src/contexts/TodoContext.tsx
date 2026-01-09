import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type Action =
  | { type: "ADD"; payload: string }
  | { type: "TOGGLE"; payload: number }
  | { type: "DELETE"; payload: number }
  | { type: "EDIT"; payload: { id: number; text: string } }
  | { type: "CLEAR_COMPLETED" };

const TodoContext = createContext<any>(null);

const reducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "TOGGLE":
      return state.map((t) =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t
      );
    case "DELETE":
      return state.filter((t) => t.id !== action.payload);
    case "EDIT":
      return state.map((t) =>
        t.id === action.payload.id ? { ...t, text: action.payload.text } : t
      );
    case "CLEAR_COMPLETED":
      return state.filter((t) => !t.completed);
    default:
      return state;
  }
};

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, dispatch] = useReducer(reducer, [], () =>
    JSON.parse(localStorage.getItem("todos") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo: (text: string) => dispatch({ type: "ADD", payload: text }),
        toggleTodo: (id: number) => dispatch({ type: "TOGGLE", payload: id }),
        deleteTodo: (id: number) => dispatch({ type: "DELETE", payload: id }),
        editTodo: (id: number, text: string) =>
          dispatch({ type: "EDIT", payload: { id, text } }),
        clearCompleted: () => dispatch({ type: "CLEAR_COMPLETED" }),
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
