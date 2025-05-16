"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const escolasController_1 = require("../controllers/escolasController");
const router = (0, express_1.Router)();
router.get('/', escolasController_1.getEscolas);
router.get('/:id', escolasController_1.getEscolaById);
router.post('/', escolasController_1.createEscola);
router.put('/:id', escolasController_1.updateEscola);
router.delete('/:id', escolasController_1.deleteEscola);
exports.default = router;
//# sourceMappingURL=escolas.js.map