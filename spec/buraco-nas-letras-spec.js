var modulo = require("../app/buraco-nas-letras");

describe("BuracoNasLetras", function() {
   it("tiago deve ter três buracos", function() {
    var buracoNasLetras = new modulo.BuracoNasLetras("tiago");
     expect(buracoNasLetras.calcular()).toBe(3);
  });
  it("Boa deve ter quatro buracos", function() {
    var buracoNasLetras = new modulo.BuracoNasLetras("Boa");
     expect(buracoNasLetras.calcular()).toBe(4);
  });
});