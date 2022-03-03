import "./App.css";

import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/RenataNogDias/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              Open source code
            </a>{" "}
            by Renata Dias
          </small>
        </footer>
      </div>
    </div>
  );
}
