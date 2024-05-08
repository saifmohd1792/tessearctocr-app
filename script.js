document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('startButton');
    const output = document.getElementById('output');
  
    startButton.addEventListener('click', function () {
      const language = document.getElementById('language').value;
      const font = document.getElementById('font').value;
      const iterations = document.getElementById('iterations').value;
      const learningRate = document.getElementById('learningRate').value;
      const maxpages = document.getElementById('maxpages').value;
  
      // Call backend API with parameters and handle response
      fetch('/start-fine-tuning', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          language,
          font,
          iterations,
          learningRate,
          maxpages,
        }),
      })
        .then(response => response.json())
        .then(data => {
          // Display output
          output.innerHTML = `<p>${data.message}</p>`;
        })
        .catch(error => {
          console.error('Error:', error);
          output.innerHTML = `<p>Error: ${error.message}</p>`;
        });
    });
  });
  