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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToRabbitMQ = void 0;
const amqplib_1 = __importDefault(require("amqplib"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    protocol: "amqp",
    hostname: "54.210.113.84",
    port: 5672,
    username: "guest",
    password: "guest",
};
function connectToRabbitMQ() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield amqplib_1.default.connect(config);
            console.log('Conexion a RabbitMQ exitosa');
            return conn.createChannel();
        }
        catch (error) {
            console.log('Error al conectar con RabbitMQ', error);
            throw error;
        }
    });
}
exports.connectToRabbitMQ = connectToRabbitMQ;
