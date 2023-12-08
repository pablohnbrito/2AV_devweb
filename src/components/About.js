// Importe o React e, se necessário, o CSS para estilos
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Defina o componente do formulário
const About = () => {
  // Função para redirecionar após o envio do formulário
  const redirecionar = () => {
    // Implemente a lógica de redirecionamento aqui
    <Link className="nav-link" to="/" />
    console.log('Formulário enviado! Redirecionando...');
  };

  return (
    <div>
      <figure>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSId_TQMPQ-3IXS7QQfzi4V47FQhFoQUB-o7PokI5b5mQ&s" alt="Em construção" />
      </figure>
    </div>
  );
}

// Exporte o componente para poder usá-lo em outros lugares
export default About;
