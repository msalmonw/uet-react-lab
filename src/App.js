import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import Header from "./Header";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });

    // console.log("hello mount")
  }, []);

  const [name, setName] = useState("zohaib");
  const [email, setEmail] = useState("");

  function login() {
    const data = {
      name: name,
      email: email,
    };
    console.log("server", data);
  }
  return (
    <Fragment>
      <Header name={name} />
      <h1>Login</h1>
      <label>Name</label>
      <input name="name" onChange={(e) => setName(e.target.value)} />
      <br />
      <label>Email</label>
      <input name="email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <button onClick={login}>Login </button>
      <p>Name :{name}</p>
      <p>Email :{email}</p>
    </Fragment>
  );
}

export default App;
