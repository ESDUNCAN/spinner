process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r|   ');
  setTimeout(() => {
    process.stdout.write('\r/   ');
    setTimeout(() => {
      process.stdout.write('\r-   ');
      setTimeout(() => {
        process.stdout.write('\r\\   ');
        setTimeout(() => {
          process.stdout.write('\r\|  \n');
        }, 9000);
      }, 7000);
    }, 5000);
  }, 3000);
}, 1000);




