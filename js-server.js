import { createRequire } from "module";

const require = createRequire(import.meta.url);

const jsonServer = require("json-server");
const auth = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.db = router.db;

// auth middleware
server.use(auth);

// routes
server.use(router);

server.listen(3001, () => {
  console.log("JSON Server running on http://localhost:3001");
});
