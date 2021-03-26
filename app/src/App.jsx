import React from 'react';

const App = () => {

  const persona = {
    nombre: 'Rigo Galicia',
    edad: 29
  }

  return (
    <>
      <h1>Hola Mundo!!!</h1>
      <pre>{JSON.stringify(persona, null, 3)}</pre>
    </>
  );
};

export default App;
