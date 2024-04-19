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
exports.MysqlRepository = void 0;
const db_config_1 = require("../../../database/db.config");
class MysqlRepository {
    constructor() {
        this.createPedidos = (pedidos) => __awaiter(this, void 0, void 0, function* () {
            const sql = 'INSERT INTO pedidos(datos_pago) VALUES (?)';
            const params = [pedidos.datos_pago];
            try {
                const result = yield (0, db_config_1.query)(sql, params);
                return result;
            }
            catch (error) {
                console.log('Hubo un error al crear el pedido en mysql', error);
                throw new Error('Error al crear el pedido en Mysql');
            }
        });
    }
}
exports.MysqlRepository = MysqlRepository;
