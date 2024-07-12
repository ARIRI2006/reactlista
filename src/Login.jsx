import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const { login, logout, user } = useContext(AuthContext);

  const handleLogin = () => {
    login(username);
    setUsername('');
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Bem-vindo, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Digite seu nome de usuário"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;
