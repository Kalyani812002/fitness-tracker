import React, { useState } from "react";

function Login() {

  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:",email,pass);
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e)=>setPass(e.target.value)}
        />

        <button type="submit">Login</button>

      </form>
    </div>
  );
}

export default Login;