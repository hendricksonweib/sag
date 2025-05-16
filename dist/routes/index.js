"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const escolas_1 = __importDefault(require("./escolas"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.json({
        message: 'API do Sistema de Avaliação e Gerenciamento (SAG)',
        status: 'online',
        endpoints: [
            '/escolas',
            '/turmas',
            '/alunos',
            '/provas',
            '/usuarios',
            '/auth'
        ]
    });
});
router.use('/escolas', escolas_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map