const net = require('net');
const stdin = process.stdin;
stdin.setRawMode(true); 

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.0.155',
    port: 50541
  });
  // interpret incoming data as text


  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('connect succesfully');

  })


  conn.setEncoding('utf8');


  conn.write('Name: MIN');

  
  return conn;
}

module.exports = {connect};