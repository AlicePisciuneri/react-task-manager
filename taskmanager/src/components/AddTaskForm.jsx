import { useState } from "react";

export default function AddTaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const newTask = {
            title: title,
            description: description,
        };

        console.log("NUOVA TASK (solo form, niente API):", newTask);

        setTitle("");
        setDescription("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Aggiungi un task</h2>

            <label>
                Titolo
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Es. Studiare React"
                />
            </label>

            <label>
                Descrizione
                <textarea
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Es. Ripassare useEffect e custom hooks"
                />
            </label>

            <button type="submit">Aggiungi</button>
        </form>
    );
}
