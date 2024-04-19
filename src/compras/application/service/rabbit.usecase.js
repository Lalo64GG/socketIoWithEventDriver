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
exports.PedidosRepository = void 0;
const rabbitmqtt_config_1 = require("../../../rabbit/rabbitmqtt.config");
class PedidosRepository {
    sendPedidos(pedidos) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const channel = yield (0, rabbitmqtt_config_1.connectToRabbitMQ)();
                yield channel.sendToQueue('pedidos', Buffer.from(JSON.stringify({ message: 'Pedido creado', pedidos })));
                console.log('Pedido enviado a RabbitMQ', pedidos);
                yield channel.close();
                return true;
            }
            catch (error) {
                console.error('Error al enviar el pedido a RabbitMQ', error);
                return false;
            }
        });
    }
}
exports.PedidosRepository = PedidosRepository;
