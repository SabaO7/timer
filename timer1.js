const args = process.argv.slice(2);

for (const arg of args) {
  const seconds = parseInt(arg);

  if (isNaN(seconds) || seconds <= 0) {
    continue;
  }
  
  setTimeout(() => {
    process.stdout.write('\x07'); 
    console.log(`Beep after ${seconds} seconds`);
  }, seconds * 1000);
}

