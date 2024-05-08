import React, { useState } from 'react';

function App() {
  const [parameters, setParameters] = useState({
    language: '',
    font: '',
    preprocessing: '',
    iterations: '',
    learningRate: '',
    // Add more parameters as needed
  });

  const handleParameterChange = (e) => {
    const { name, value } = e.target;
    setParameters({
      ...parameters,
      [name]: value,
    });
  };

  const startFineTuning = () => {

 
  };

  return (
    <div>
      <h1>Tesseract OCR Fine-Tuning Tool</h1>
      <div>
        <label>
          Language:
          <input
            type="text"
            name="language"
            value={parameters.language}
            onChange={handleParameterChange}
          />
        </label>
      </div>
      <div>
        <label>
          Font:
          <input
            type="text"
            name="font"
            value={parameters.font}
            onChange={handleParameterChange}
          />
        </label>
      </div>
      <div>
        <label>
          Preprocessing:
          <input
            type="text"
            name="preprocessing"
            value={parameters.preprocessing}
            onChange={handleParameterChange}
          />
        </label>
      </div>
      <div>
        <label>
          Training Iterations:
          <input
            type="number"
            name="iterations"
            value={parameters.iterations}
            onChange={handleParameterChange}
          />
        </label>
      </div>
      <div>
        <label>
          Learning Rate:
          <input
            type="number"
            name="learningRate"
            value={parameters.learningRate}
            onChange={handleParameterChange}
          />
        </label>
      </div>
      {/* Add more parameter input fields as needed */}
      <button onClick={startFineTuning}>Start Fine-Tuning</button>
    </div>
  );
}

export default App;
