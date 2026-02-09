# 🚀 Setup Progetto -- Task Manager Avanzato

## 📁 Struttura delle cartelle

All'interno della cartella principale del progetto:

Task Manager Avanzato/\
├── react-task-manager-back/ → Backend (API server)\
└── react-task-manager-front/ → Frontend (React + Vite)

Backend e frontend sono due progetti separati, ognuno con le proprie
dipendenze e comandi.

------------------------------------------------------------------------

## 🔧 Setup Backend

1.  Clonare dal terminale il repository del backend

git clone https://github.com/boolean-it/react-task-manager-back

2.  Entrare nella cartella del backend

cd react-task-manager-back

3.  Installare le dipendenze

npm install

4.  Avviare il server

npm run start

Se tutto è corretto, il terminale mostrerà:

Server in ascolto su http://localhost:3001

Questo sarà l'URL base per le chiamate API dal frontend.

------------------------------------------------------------------------

## ⚛️ Setup Frontend da terminale (Vite + React)

1.  Tornare nella cartella principale del progetto

cd ..

2.  Creare il progetto React con Vite

npm create vite@latest react-task-manager-front -- --template react

3.  Entrare nella cartella del frontend

cd react-task-manager-front

4.  Installare le dipendenze

npm install

5.  Avviare il server di sviluppo

npm run dev

Il frontend sarà visibile su un URL tipo:

http://localhost:5173

------------------------------------------------------------------------

## 🧭 Installazione e Configurazione Routing 

1.  Installare React Router

npm install react-router-dom

2.  Avvolgere l'app con BrowserRouter in src/main.jsx

BrowserRouter permette di gestire le rotte leggendo l'URL del browser.

3.  Configurare le rotte in src/App.jsx usando:

-   Routes → contenitore delle rotte\
-   Route → singola rotta\
-   Link → navigazione senza refresh

Esempio rotte base: - "/" → HomePage\
- "/tasks" → TasksPage

------------------------------------------------------------------------

## ✅ Stato attuale del progetto

✔ Backend funzionante su http://localhost:3001\
✔ Frontend creato con Vite\
✔ Routing configurato con react-router-dom\
✔ Navigazione tra pagine senza refresh

------------------------------------------------------------------------

Prossimo passo: collegare il frontend al backend e iniziare la gestione
reale dei task (fetch, stato globale, CRUD).
