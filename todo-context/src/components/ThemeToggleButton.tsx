import { useTheme } from "../contexts/ThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme(); // ✅ useTheme instead of useTodos

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? "☀️ Switch to Light" : "🌙 Switch to Dark"}
    </button>
  );
};

export default ThemeToggleButton;
