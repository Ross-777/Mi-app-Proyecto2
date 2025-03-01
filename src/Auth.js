// src/Auth.js
import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // Aquí podrías hacer la lógica para enviar estos datos al servidor
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Bienvenido a la Tienda</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          style={{
            display: "block",
            margin: "10px auto",
            padding: "10px",
            width: "250px",
          }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          style={{
            display: "block",
            margin: "10px auto",
            padding: "10px",
            width: "250px",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
            margin: "10px",
          }}
        >
          Iniciar sesión
        </button>
      </form>
      <button
        style={{
          backgroundColor: "pink",
          color: "white",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
          margin: "10px",
        }}
      >
        Crear cuenta
      </button>
    </div>
  );
};

export default Auth;
