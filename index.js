const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("cities.json");
const middleware = jsonServer.defaults();
const port = process.env.PORT || 9000;

server.use(middleware);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port: ${port}`);
});
