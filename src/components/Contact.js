// src/components/SimpleForm.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Formulario = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para processar os dados do formulário (pode ser adicionada aqui)
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} >
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Cidade:</label>
        <input
          type="city"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Curso:</label>
        <input
          type="course"
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
    </form>
  );
  }

const Contact = () => (
    <div>
      <Formulario />
      <Link to="/">
      <button type="submit" className="btn btn-primary" >Submit</button>
      </Link>
    </div>
  );

export default Contact;