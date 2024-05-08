// backend/index.js

// Import necessary modules
const { spawn } = require('child_process');
const path = require('path');

// Function to start fine-tuning process
function startFineTuning(parameters) {
  // Tesstrain command arguments
  const args = [
    'tesstrain.sh',                    // Tesstrain script
    '--fonts_dir', 'path/to/fonts',    // Path to fonts directory
    '--lang', parameters.language,     // Language parameter
    '--linedata_only',                  // Use only line data
    '--noextract_font_properties',     // Don't extract font properties
    '--langdata_dir', 'path/to/langdata', // Path to language data directory
    '--tessdata_dir', 'path/to/tessdata', // Path to Tesseract data directory
    '--output_dir', 'path/to/output',  // Output directory
    '--training_text', 'path/to/training_text', // Path to training text file
    '--wordlist', 'path/to/wordlist',  // Path to word list file
    '--iterations', parameters.iterations, // Number of training iterations
    '--exposures', parameters.learningRate, // Learning rate
    '--maxpages', '0'                   // Process all pages in training text
  ];

  // Spawn Tesstrain process
  const tesstrainProcess = spawn('bash', args, {
    cwd: path.join(__dirname, '..')     // Set current working directory
  });

  // Event listeners for stdout and stderr
  tesstrainProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  tesstrainProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  // Handle process exit
  tesstrainProcess.on('exit', (code) => {
    console.log(`Tesstrain process exited with code ${code}`);
    // Implement logic for handling process exit (e.g., notification)
  });
}

module.exports = { startFineTuning };
