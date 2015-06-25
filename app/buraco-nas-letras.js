exports.BuracoNasLetras = function(texto){
	this.letras = {"a": 1, "b": 1, "B": 2, "o":1, "g": 1, "t":0, "i": 0, "d":1, "v": 0};
	this.texto  = texto;
	this.calcular = function(){
		var texto  = this.texto.replace(/ /g,'');
		var letras = this.letras;		
		return texto.split("").map(function(str){ return letras[str] }).reduce(function(p,c){ return p + c});	
	}
}