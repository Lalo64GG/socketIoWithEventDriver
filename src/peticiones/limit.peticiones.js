"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountLimiter = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
exports.accountLimiter = (0, express_rate_limit_1.default)({
    windowMs: 60 * 60 * 1000,
    max: 6,
    message: "Demasiadas peticiones realizadas, intenta despues de 1 hora"
});
