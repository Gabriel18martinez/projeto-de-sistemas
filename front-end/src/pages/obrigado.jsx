import { Link } from 'react-router-dom';
import './ThankYou.css'

const Obrigado = () => {
  
    return (
      <div className="thank-you-container">
        <h1>Obrigado!</h1>
        <p>Seu cadastro foi concluído com sucesso.</p>
        <p>Você pode informar seus dados no local de retirada do veículo</p>
        <Link to="/" className="back-button">Voltar para a página inicial</Link>
      </div>
    );
};

export default Obrigado;
