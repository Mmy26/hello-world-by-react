import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" alt="Vite logo" className="logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} alt="React logo" className="logo react" />
        </a>
      </div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
