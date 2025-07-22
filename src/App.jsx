import { useState } from 'react' // Esto es un "Hook" de React para manejar estado
import './App.css' // Importa los estilos para este componente

function App() {
  const [mensaje, setMensaje] = useState("¡Hola desde React!") 

  return (
    <>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>{mensaje}</h1> {}
        <p>¡Mi primera página web con React!</p>
        <button onClick={() => setMensaje("¡Haz hecho clic!")}>
          Cambiar Mensaje
        </button>
      </div>
    </>
  )
}

export default App 