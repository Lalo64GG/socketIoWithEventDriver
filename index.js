"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const pedidos_router_1 = __importDefault(require("./src/compras/infrestructure/routes/pedidos.router"));
const socket_1 = require("./scoket/socket");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3002;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/pedidos', pedidos_router_1.default);
const server = http_1.default.createServer(app);
server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
(0, socket_1.conectarWebSocket)();
