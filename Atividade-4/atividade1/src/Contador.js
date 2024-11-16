import React, { useState, useEffect } from 'react';
import './App.css';  

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [ativo, setAtivo] = useState(false);

  
  useEffect(() => {
    let intervalId;

    if (ativo) {
      intervalId = setInterval(() => {
        setContador((prevContador) => prevContador + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId); 
  }, [ativo]);

  
  const iniciarContador = () => {
    setAtivo(true);
  };

  
  const pararContador = () => {
    setAtivo(false);
  };

  return (
    <div className="contador-container">
      <h1 className="titulo">Contador</h1> {/* Apenas o título "Contador" */}
      <h2>{contador}</h2> {/* Exibe o valor do contador */}
      <div className="botoes-container">
        <button onClick={iniciarContador} disabled={ativo}>
          Iniciar
        </button>
        <button onClick={pararContador} disabled={!ativo}>
          Parar
        </button>
      </div>
    </div>
  );
};

export default Contador;