"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const pedidos_controller_1 = require("../controller/pedidos.controller");
const limit_peticiones_1 = require("../../../peticiones/limit.peticiones");
exports.router = express_1.default.Router();
exports.router.post('/', limit_peticiones_1.accountLimiter, pedidos_controller_1.PedidosController.createPedidos);
exports.default = exports.router;
