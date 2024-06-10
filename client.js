const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: "50541",
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: REM");
  });
  conn.on("connect", () => {
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 100);
    // setTimeout(() => conn.write("Move: up"), 1000);
    // setTimeout(() => conn.write("Move: up"), 2000);
    // setTimeout(() => conn.write("Move: up"), 3000);
    // setTimeout(() => conn.write("Move: up"), 4000);
  });
  return conn;
};
const client = {
  connect,
};
module.exports = client;