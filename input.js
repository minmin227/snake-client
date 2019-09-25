let connection;

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  connection = conn;
  
  const handlerUserInput = function (connection) {
    process.stdin.on('data', (key) => {
      if (key === "\u0003") {
        process.exit();
      } else if (key === 'w') {
        connection.write('Move: up');
      } else if (key === 'd') {
        connection.write('Move: right')
      } else if (key === 'a') {
        connection.write('Move: left') 
      } else if (key === 's') {
        connection.write('Move: down')
      }
    })
  }
  handlerUserInput(connection);
  stdin.resume();
  return stdin;
}

module.exports = {setupInput};