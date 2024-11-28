import React, { useState } from "react";
import DOMPurify from "dompurify"; // Importa a biblioteca de sanitização

function App() {
  const [message, setMessage] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    // Sanitiza o conteúdo antes de renderizá-lo no DOM
    const cleanMessage = DOMPurify.sanitize(message);
    setSubmittedMessage(cleanMessage);
    setMessage("");
  };

  return (
    <div className="App">
      <h1>Exemplo de XSS Seguro em React</h1>
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Digite algo"
      />
      <button onClick={handleSubmit}>Enviar</button>
      <div>
        <h2>Mensagem:</h2>
        {/* Conteúdo sanitizado é exibido de forma segura */}
        <p dangerouslySetInnerHTML={{ __html: submittedMessage }}></p>
      </div>
    </div>
  );
}

export default App;
