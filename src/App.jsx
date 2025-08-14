import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nurzotbek from "./nurzotbek";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>Nurzotbek</h1>
      <h1>Nurzotbek</h1>
      <h1>Muhammadziyo</h1>
      <h1>Muhammadziyo</h1>
      <h1>Muhammadziyo</h1>
      <h1>Muhammadziyo</h1>
      <h1>Muhammadziyo</h1>
      <h1>Muhammadziyo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <h3>Men uddaladim Nurzotbek</h3>
        <h3>Men uddaladim Nurzotbek</h3>
        <h3>Men uddaladim Nurzotbek</h3>
        <h3>Men uddaladim Nurzotbek</h3>
        <h3>Men uddaladim Nurzotbek</h3>
        <h3>Men uddaladim Nurzotbek</h3>
        <h3>Men uddaladim Nurzotbek</h3>
        <h3>Men uddaladim Nurzotbek</h3>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1>Assalomu alaykum</h1>
      <h1>Assalomu alaykum</h1>
      <h1>Assalomu alaykum</h1>
      <h1>Assalomu alaykum</h1>
      <h1>Assalomu alaykum</h1>
      <Nurzotbek />
    </>
  );
}

export default App;
