"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe("organizarNombres prueba", () => {
    let arrayNombres = ["Juan", "María", "Carlos", "Lucía", "Pedro", "Sofía"];
    it("1- buscar a una persona y que la devuelva sin filtrar", () => {
        expect((0, src_1.buscarYFiltrarNombres)(arrayNombres, "Juan", null)).toEqual(["Juan"]);
    });
    it("2- buscar a varias personas sin filtrar", () => {
        expect((0, src_1.buscarYFiltrarNombres)(arrayNombres, "a", null)).toEqual(["Juan", "María", "Carlos", "Lucía", "Sofía"]);
    });
    it("3- buscar pero no encontrar a nadie sin filtrar", () => {
        expect((0, src_1.buscarYFiltrarNombres)(arrayNombres, "333", null)).toEqual([]);
    });
    it("4- buscar con un caracter con acento sin filtrar", () => {
        expect((0, src_1.buscarYFiltrarNombres)(arrayNombres, "í", null)).toEqual(["María", "Lucía", "Sofía"]);
    });
    it("5- buscar a una persona y que la devuelva filtrando una letra que no esté", () => {
        expect((0, src_1.buscarYFiltrarNombres)(arrayNombres, "Juan", "z")).toEqual(["Juan"]);
    });
    it("6- buscar a varias personas filtrando", () => {
        expect((0, src_1.buscarYFiltrarNombres)(arrayNombres, "a", "Ca")).toEqual(["Juan", "María", "Lucía", "Sofía"]);
    });
    it("7- buscar pero no encontrar a nadie sin el filtro, pero añadiendo el parámetro", () => {
        expect((0, src_1.buscarYFiltrarNombres)(arrayNombres, "333", "Juan")).toEqual([]);
    });
    it("8- buscar con un caracter con acento, filtrando", () => {
        expect((0, src_1.buscarYFiltrarNombres)(arrayNombres, "í", "S")).toEqual(["María", "Lucía"]);
    });
    it("9- buscar y filtrar el mismo string", () => {
        expect((0, src_1.buscarYFiltrarNombres)(arrayNombres, "a", "a")).toEqual([]);
    });
});
//# sourceMappingURL=buscarYFiltrarNombres.test.js.map