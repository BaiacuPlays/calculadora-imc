import React, { useState } from 'react';


const App = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);

  const calcularIMC = () => {
    if (!altura || !peso) {
      alert('Por favor, insira a altura e o peso.');
      return;
    }

    const alturaMetros = parseFloat(altura) / 100;
    const imcCalculado = parseFloat(peso) / (alturaMetros * alturaMetros);
    setImc(imcCalculado.toFixed(2));
  };

  const getClassificacao = () => {
    if (imc === null) {
      return '';
    } else if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc < 24.9) {
      return 'Peso normal';
    } else if (imc < 29.9) {
      return 'Sobrepeso';
    } else if (imc < 34.9) {
      return 'Obesidade grau 1';
    } else if (imc < 39.9) {
      return 'Obesidade grau 2';
    } else {
      return 'Obesidade grau 3';
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <label>
        Altura (cm):
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </label>
      <label>
        Peso (kg):
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </label>
      <button onClick={calcularIMC}>Calcular IMC</button>

      {imc !== null && (
        <div>
          <p>Seu IMC é: {imc}</p>
          <p>Classificação: {getClassificacao()}</p>
        </div>
      )}
    </div>
  );
}

export default App;
