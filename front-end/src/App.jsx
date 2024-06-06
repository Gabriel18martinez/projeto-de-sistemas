import { useState, useEffect } from "react";
import axios from 'axios';
import './app.css'
import { Link } from "react-router-dom";
import BasicModal from "./components/modal";


export default  function App() {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/marca/carros')
      .then(response => {
        setCarros(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter carros:', error);
      });
  }, []);

  return (
    <>  
    <div className="container">
      {carros.map(carro => (
        <div className="card" key={carro.id}>
          <img src={carro.imagem} alt={carro.nome} />
          <h2>{carro.nome}</h2>
          <p>Preço: R$ {carro.preco}</p>
          <BasicModal description={carro.descricao}/>
          <button><Link to={"pagamento"}/>Alugar</button>
        </div>
      ))}
    </div>
    </>
  );
}

