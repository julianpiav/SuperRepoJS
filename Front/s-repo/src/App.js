import React, { useState } from 'react';

function App() {
  const [inspiration, setInspiration] = useState("Haz clic y prepárate para una revelación...");

  const getInspiration = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BFF_URL}`);
    if (!response.ok) throw new Error('Error al obtener la inspiración');
    const data = await response.json();
    setInspiration(data.message);
  } catch (error) {
    console.error("Error fetching inspiration:", error);
    setInspiration("Hubo un problema al obtener la inspiración. Inténtalo de nuevo.");
  }
};


  const getRandomColor = () => {
    const colors = ["#FF6347", "#FFD700", "#ADFF2F", "#20B2AA", "#FF69B4"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Aplicación de Inspiración</h1>
      <p>{inspiration}</p>
      <button
        onClick={getInspiration}
        style={{
          backgroundColor: getRandomColor(),
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Dame Inspiración
      </button>
    </div>
  );
}

export default App;
