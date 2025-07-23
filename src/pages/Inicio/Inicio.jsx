import React from 'react';
// import styles from './Home.module.css'; // Si usas CSS Modules para Home

function Home() {
  return (
    <div className="home-container">
      <h1>¡Bienvenido a Vamos a Mejorar!</h1>
      <p>Tu futuro financiero comienza aquí.</p>
      <button className="bg-blue-600 text-white p-3 rounded-lg mt-4">Conoce nuestros servicios</button>
    </div>
  );
}

export default Home;