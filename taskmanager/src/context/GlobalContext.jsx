import { createContext } from "react";
import useTasks from "../hooks/useTasks";

export const GlobalContext = createContext(null);

export function GlobalProvider({ children }) {
    const { tasks, loading, error, addTask, removeTask, updateTask } = useTasks();

    return (
        <GlobalContext.Provider
            value={{ tasks, loading, error, addTask, removeTask, updateTask }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

