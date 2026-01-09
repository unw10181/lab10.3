import { useFilter } from "../contexts/FilterContext";

const FilterButtons = () => {
  const { filter, setFilter } = useFilter();

  return (
    <div className="filters">
      {["all", "active", "completed"].map((f) => (
        <button
          key={f}
          className={filter === f ? "active" : ""}
          onClick={() => setFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
