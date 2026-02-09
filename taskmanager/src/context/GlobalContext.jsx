import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + "/tasks")

            .then((res) => res.json())
            .then((data) => {
                console.log("Task ricevute:", data);
                setTasks(data);
            })
            .catch((error) => {
                console.log("Errore fetch tasks:", error);
            });
    }, []);

    return (
        <GlobalContext.Provider value={{ tasks, setTasks }}>
            {children}
        </GlobalContext.Provider>
    );
}
