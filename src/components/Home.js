// Importe o React e, se necessário, o CSS para estilos
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Defina o componente principal
const SiteDaWeb = () => {
  return (
    <div className="container">
      <h4>Bem-vindo ao Site da Web, o melhor site de toda a web!!</h4>
      <h4>Aqui você tem as melhores opções para se entreter, apenas se divirta!!</h4>
      <figure className="ibagem">
        <img src="https://static.vecteezy.com/ti/fotos-gratis/t2/22653879-fantasia-ilha-com-cachoeiras-3d-ilustracao-elementos-do-isto-imagem-mobiliado-de-nasa-generativo-ai-gratis-foto.jpg" alt="Minha Figura" />
        <figcaption className="ibagem">Relaxe e curta</figcaption>
      </figure>
    </div>
  );
}

// Exporte o componente para poder usá-lo em outros lugares
export default SiteDaWeb;
