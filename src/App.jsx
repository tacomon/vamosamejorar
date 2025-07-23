import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa solo tu componente de página Home
import Inicio from './pages/Inicio/Inicio.jsx';

// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

import './App.css'; // Estilos generales

function App() {
  return (
    <Router> {/* Envuelve toda tu aplicación en <Router> */}
      <div className="app-layout"> {/* Un contenedor para tu diseño general */}
        
        {/* Aquí iría el Navbar */}
        {/* <Navbar /> */}

        <main className="main-content">
          <Routes> {/* Define tus rutas dentro de <Routes> */}
            
            {/* La ruta principal "/" renderiza el componente Inicio */}
            <Route path="/" element={<Inicio />} />

            <Route path="*" element={
              <div style={{ textAlign: 'center', padding: '50px' }}>
                <h1>404: Página no encontrada</h1>
                <p>Lo sentimos, la página que buscas no existe en Financiera Confianza.</p>
              </div>
            } />
          </Routes>
        </main>

        {/* Aquí iría el Footer */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;