"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidosController = void 0;
const pedidos_aplication_1 = require("../../application/useCases/pedidos.aplication");
const mysql_repository_1 = require("../dataAccess/mysql.repository");
const rabbit_usecase_1 = require("../../application/service/rabbit.usecase");
const socket_1 = require("../../../../scoket/socket");
const mysqlRepository = new mysql_repository_1.MysqlRepository();
const pagoAppService = new pedidos_aplication_1.PedidoApplication(mysqlRepository);
const pedidosRepository = new rabbit_usecase_1.PedidosRepository();
class PedidosController {
    static createPedidos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newPedidos = req.body;
                yield pagoAppService.createPedidos(newPedidos);
                yield pedidosRepository.sendPedidos(newPedidos);
                const notificacion = {
                    message: 'El pago se hizo de manera correcta, el pedido se a realizado'
                };
                socket_1.clients.forEach(ws => {
                    ws.send(JSON.stringify(notificacion));
                });
                res.status(201).json({
                    message: 'El pedido fue creado con exito',
                    pedido: newPedidos
                });
            }
            catch (error) {
                console.log('Hubo un error al crear el pedido', error);
                res.status(500).json({
                    error: 'Hubo un error al crear el pedido'
                });
            }
        });
    }
}
exports.PedidosController = PedidosController;
