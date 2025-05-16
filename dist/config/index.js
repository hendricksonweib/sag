"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const config = {
    server: {
        port: process.env.PORT || 3000,
        env: process.env.NODE_ENV || 'development',
    },
    auth: {
        jwtSecret: process.env.JWT_SECRET || 'sag-sistema-secret',
        jwtExpiresIn: process.env.JWT_EXPIRES_IN || '24h',
    },
    database: {
        url: process.env.DATABASE_URL,
    },
    uploads: {
        dir: path_1.default.resolve(__dirname, '../../uploads'),
        maxSize: 5 * 1024 * 1024,
        allowedTypes: ['image/jpeg', 'image/png', 'application/pdf'],
    },
    api: {
        version: 'v1',
        prefix: '/api',
    },
};
exports.default = config;
//# sourceMappingURL=index.js.map