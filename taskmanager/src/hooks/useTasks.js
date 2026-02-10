import { useEffect, useState } from "react";

const API_URL = "http://localhost:3001";

export default function useTasks() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchTasks() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(API_URL + "/tasks");

                if (!response.ok) {
                    throw new Error("Errore HTTP: " + response.status);
                }

                const data = await response.json();
                setTasks(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchTasks();
    }, []);

    async function addTask(taskData) {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(API_URL + "/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(taskData),
            });

            if (!response.ok) {
                throw new Error("Errore HTTP: " + response.status);
            }

            const createdTask = await response.json();
            //console.log("RISPOSTA POST /tasks:", createdTask);

            setTasks((prevTasks) => prevTasks.concat(createdTask));

            return createdTask;
        } catch (err) {
            setError(err.message);
            return null;
        } finally {
            setLoading(false);
        }
    }

    function removeTask() { }

    function updateTask() { }

    return { tasks, loading, error, addTask, removeTask, updateTask };
}

