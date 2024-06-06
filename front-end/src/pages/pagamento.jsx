import { useState } from 'react';
import axios from 'axios';
import './PaymentForm.css';
import { Link } from 'react-router-dom';



const Pagamento = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    celular: '',
    numeroCartao: '',
    validadeCartao: '',
    cvv: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      celular: parseInt(formData.celular, 10) // Converte celular para número
    };
    try {
      await axios.post('http://localhost:8080/usuario', dataToSend, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  };


  return (
    <div className="user-form-container">
      <h2>Cadastro de Usuário</h2>
      <br />
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="sobrenome">Sobrenome</label>
          <input
            type="text"
            id="sobrenome"
            name="sobrenome"
            value={formData.sobrenome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="celular">Celular</label>
          <input
            type="tel"
            id="celular"
            name="celular"
            value={formData.celular}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="numeroCartao">Número do cartão</label>
          <input
            type="text"
            id="numeroCartao"
            name="numeroCartao"
            value={formData.numeroCartao}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="validadeCartao">Validade do cartão</label>
          <input
            type="text"
            id="validadeCartao"
            name="validadeCartao"
            value={formData.validadeCartao}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <Link to={'obrigado'}><button type="submit" className="submit-button">Cadastrar</button></Link>
      </form>
    </div>
  );
};

export default Pagamento;
