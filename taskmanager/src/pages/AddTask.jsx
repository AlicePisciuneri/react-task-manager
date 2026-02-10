import { useState, useRef, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";

export default function AddTask() {
    const { addTask } = useContext(GlobalContext);

    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");

    const descriptionRef = useRef(null);
    const statusRef = useRef(null);

    function validateTitle(value) {
        const trimmed = value.trim();

        if (trimmed.length === 0) {
            return "Il nome del task non può essere vuoto.";
        }

        for (let i = 0; i < trimmed.length; i = i + 1) {
            const char = trimmed[i];

            if (symbols.includes(char)) {
                return "Il nome del task non può contenere simboli speciali.";
            }
        }

        return "";
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const errorMessage = validateTitle(title);
        setTitleError(errorMessage);

        if (errorMessage !== "") {
            return;
        }

        const newTask = {
            title: title,
            description: descriptionRef.current.value,
            status: statusRef.current.value,
        };

        const created = await addTask(newTask);

        if (created) {
            setTitle("");
            setTitleError("");
            descriptionRef.current.value = "";
            statusRef.current.value = "To do";
        }
    }

    function handleTitleChange(event) {
        const newValue = event.target.value;

        setTitle(newValue);

        const errorMessage = validateTitle(newValue);
        setTitleError(errorMessage);
    }

    return (
        <div>
            <h1>Aggiungi Task</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nome del task
                        <input
                            type="text"
                            value={title}
                            onChange={handleTitleChange}
                            placeholder="Es. Studiare React"
                        />
                    </label>

                    {titleError !== "" && <p>{titleError}</p>}
                </div>

                <div>
                    <label>
                        Descrizione
                        <textarea
                            ref={descriptionRef}
                            placeholder="Scrivi una descrizione..."
                        ></textarea>
                    </label>
                </div>

                <div>
                    <label>
                        Stato
                        <select ref={statusRef} defaultValue="To do">
                            <option value="To do">To do</option>
                            <option value="Doing">Doing</option>
                            <option value="Done">Done</option>
                        </select>
                    </label>
                </div>

                <button type="submit">Aggiungi Task</button>
            </form>
        </div>
    );
}






