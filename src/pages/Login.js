import React from 'react';
import '../styles/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <form
          action="#"
          method="post"
        >
          <label htmlFor="username">Nama Pengguna</label>
          <input
            type="text"
            id="username"
            name="username"
            defaultValue=""
            required
          />

          <label htmlFor="password">Kata Sandi</label>
          <div className="password-container">
            <input
              type="password"
              id="password"
              name="password"
              defaultValue=""
              required
            />
            <span className="toggle-password"></span>
          </div>

          <button type="submit">Login</button>
        </form>
        <p>
          Belum Memiliki Akun? <a href="Register">Daftar</a>
        </p>
      </div>
      <div className="logo-container">
        <img
          src="./logo.png"
          alt="Sweety Pastry"
        />
      </div>
    </div>
  );
};

export default Login;
