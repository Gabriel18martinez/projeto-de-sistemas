import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './PaymentForm.css';

const Pagamento = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    celular: '',
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
    console.log('Form data being submitted:', dataToSend);
    try {
      const response = await axios.post('http://localhost:8080/usuario', dataToSend, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Response from server:', response.data);
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
          <label htmlFor="Número do cartão">Número do cartão</label>
          <input required/>
        </div>
        <div className="form-group">
          <label htmlFor="Validade do cartão">Validade do cartão</label>
          <input required/>
        </div>
        <div className="form-group">
          <label htmlFor="CVV">CVV</label>
          <input required/>
        </div>
        <br />
        <Link to={"obrigado"} className='link'><button type="submit" className="submit-button">Cadastrar</button></Link>
      </form>
    </div>
  );
};

export default Pagamento;
