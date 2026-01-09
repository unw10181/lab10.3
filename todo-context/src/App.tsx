import { TodoProvider } from "./contexts/TodoContext";
import { FilterProvider } from "./contexts/FilterContext";
//import { ThemeProvider } from "./contexts/ThemeContext";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import ThemeToggleButton from "./components/ThemeToggleButton";
import "./styles/styles.css";

function App() {
  return (
    <>
      <TodoProvider>
        <FilterProvider>
          <div className="app">
            <h1>Todo App (Context API)</h1>
            <ThemeToggleButton />
            <TodoInput />
            <FilterButtons />
            <TodoList />
          </div>
        </FilterProvider>
      </TodoProvider>
    </>
  );
}

export default App;
