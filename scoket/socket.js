"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.desconectarWebSocket = exports.conectarWebSocket = exports.wss = exports.server = exports.clients = void 0;
const ws_1 = __importDefault(require("ws"));
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer();
exports.server = server;
const wss = new ws_1.default.Server({ port: 4000 });
exports.wss = wss;
exports.clients = new Set();
// Conexión con WebSocket
function conectarWebSocket() {
    wss.on('connection', (ws) => {
        console.log('Nuevo cliente conectado con WebSocket');
        exports.clients.add(ws);
        ws.on('close', () => {
            console.log('Cliente desconectado de WebSocket');
            exports.clients.delete(ws);
        });
    });
}
exports.conectarWebSocket = conectarWebSocket;
// Desconexión de WebSocket
function desconectarWebSocket() {
    wss.close(() => {
        console.log('Servidor WebSocket desconectado');
    });
}
exports.desconectarWebSocket = desconectarWebSocket;
