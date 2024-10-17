const fs = require('fs');

// Create a file named "welcome.txt" containing one line "Hello Node".
fs.writeFileSync('welcome.txt', 'Hello Node');

// Read and log data from "welcome.txt"
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
