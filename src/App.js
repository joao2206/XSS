import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    setSubmittedMessage(message);
    setMessage("");
  };

  return (
    <div className="App">
      <h1>Exemplo de XSS Vulnerável em React</h1>
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Digite algo"
      />
      <button onClick={handleSubmit}>Enviar</button>
      <div>
        <h2>Mensagem:</h2>
        {/* Uso de dangerouslySetInnerHTML torna vulnerável */}
        <p dangerouslySetInnerHTML={{ __html: submittedMessage }}></p>
      </div>
    </div>
  );
}

export default App;
