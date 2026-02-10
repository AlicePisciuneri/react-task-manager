import React from "react";

function TaskRow({ task }) {
    return (
        <tr>
            <td>{task.title}</td>
            <td style={{ backgroundColor: getStatusColor(task.status) }}>
                {task.status}
            </td>
            <td>{task.createdAt}</td>
        </tr>
    );
}

function getStatusColor(status) {
    if (status === "To do") return "red";
    if (status === "Doing") return "yellow";
    if (status === "Done") return "green";
    return "transparent";
}

export default React.memo(TaskRow);

//React.memo(...) = funzione di React che “memorizza” (memorizza) il componente.
// (TaskRow) = sto dicendo: “fammi una versione ottimizzata di TaskRow”.
// Cosa significa in pratica? Se il componente riceve le stesse props (stesso task), React evita di rifare il render inutilmente.
//Utile quando hai tante righe e vuoi meno lavoro.


