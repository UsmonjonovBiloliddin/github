import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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
      <h1>Nurzotbek</h1>
      <h1>Nurzotbek</h1>
      <h1>Nurzotbek</h1>
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
      =======
      <h1 className="title">ERROR</h1>
      <h1 className="title">ERROR</h1>
      <h1 className="title">ERROR</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
        tempora porro voluptates nulla velit quod ad dolorem id eum sint,
        nostrum deserunt corrupti eos quos facere officia provident perspiciatis
        ullam eius libero! Tempora harum ea ad minima vel? Ad molestias sapiente
        nisi sequi vel, saepe quaerat. Iure officiis molestias fuga culpa quos,
        provident voluptatum nihil illum animi cumque, obcaecati voluptates!
        Mollitia dolore facere aspernatur totam temporibus eaque deserunt itaque
        libero, iure quae nostrum a nesciunt corrupti, voluptate quod ea ipsam
        laboriosam magni cum eveniet. Rem reiciendis fugit voluptate possimus
        maiores nihil sequi. Similique facere tenetur omnis blanditiis. Maxime,
        odit blanditiis.
      </p>
    </>
  );
}

export default App;
