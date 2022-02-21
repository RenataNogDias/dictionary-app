import logo from "./images/logo.png";
import "./App.css";

import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="she codes logo" />
        </header>
        <main>
          <Dictionary />
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
