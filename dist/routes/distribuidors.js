"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const distribuidors_1 = require("../controllers/distribuidors");
const routerdistribuidors = (0, express_1.Router)();
routerdistribuidors.get('/', distribuidors_1.getdistribuidors);
routerdistribuidors.get('/:id', distribuidors_1.getdistribuidor);
routerdistribuidors.delete('/:id', distribuidors_1.deletedistribuidor);
routerdistribuidors.post('/', distribuidors_1.postdistribuidor);
routerdistribuidors.put('/:id', distribuidors_1.updatedistribuidor);
exports.default = routerdistribuidors;
