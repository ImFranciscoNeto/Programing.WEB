import React from 'react';
import Contador from './Contador';  
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Bem-Vindo ao Contador</h1>
      <Contador />  {/* Renderizando o componente Contador */}
    </div>
  );
}

export default App;