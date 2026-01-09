import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Filter = "all" | "active" | "completed";

const FilterContext = createContext<any>(null);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<Filter>("all");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
