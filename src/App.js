import React from 'react';
import Formulario from './Formulario';
import RelogioComMensagem from './RelogioComMensagem';
import Fatorial from './Fatorial';
import ToDoList from './ToDoList';
import Login from './Login';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <AuthProvider>
      <div>
        <h1>Aplicações React</h1>
        <h2>Exercício 1: Formulário</h2>
        <Formulario />
        <h2>Exercício 2: Relógio com Mensagem</h2>
        <RelogioComMensagem />
        <h2>Exercício 3: Fatorial</h2>
        <Fatorial />
        <h2>Exercício 4: Lista de Tarefas</h2>
        <ToDoList />
        <h2>Exercício 5: Login</h2>
        <Login />
      </div>
    </AuthProvider>
  );
}

export default App;
