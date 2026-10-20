
const fs = require('fs');


fs.writeFile('info.txt', 'Node.js is awesome!', (err) => {
  if (err) {
    console.error('Ошибка при записи файла:', err.message);
    return;
  }
  console.log('Файл info.txt успешно записан');

  
  fs.readFile('info.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка при чтении файла:', err.message);
      return;
    }
    console.log('Содержимое файла:', data);
  });
});