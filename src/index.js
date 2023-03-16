"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Video = exports.Foto = exports.Archivo = exports.Carpeta = exports.Elemento = void 0;
var Elemento = /** @class */ (function () {
    function Elemento() {
    }
    return Elemento;
}());
exports.Elemento = Elemento;
var Carpeta = /** @class */ (function (_super) {
    __extends(Carpeta, _super);
    function Carpeta(nom) {
        var _this = _super.call(this) || this;
        _this.nombre = nom;
        _this.elementos = [];
        return _this;
    }
    Carpeta.prototype.agregaralista = function (x) {
        this.elementos.push(x);
    };
    Carpeta.prototype.mostrarlista = function () {
        var list;
        list = [];
        var i;
        i = 0;
        while (i != this.elementos.length) {
            list.push(this.elementos[i].nombre);
            i = i + 1;
        }
        return list;
    };
    return Carpeta;
}(Elemento));
exports.Carpeta = Carpeta;
var Archivo = /** @class */ (function (_super) {
    __extends(Archivo, _super);
    function Archivo() {
        return _super.call(this) || this;
    }
    return Archivo;
}(Elemento));
exports.Archivo = Archivo;
var Foto = /** @class */ (function (_super) {
    __extends(Foto, _super);
    function Foto(nom, tam, tip, dim) {
        var _this = _super.call(this) || this;
        _this.nombre = nom;
        _this.tamanio = tam;
        _this.tipo = tip;
        _this.dimensiones = dim;
        return _this;
    }
    return Foto;
}(Archivo));
exports.Foto = Foto;
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video(nom, tam, tip, dur) {
        var _this = _super.call(this) || this;
        _this.nombre = nom;
        _this.tamanio = tam;
        _this.tipo = tip;
        _this.duracion = dur;
        return _this;
    }
    return Video;
}(Archivo));
exports.Video = Video;
var carpeta1 = new Carpeta("carpeta1");
var foto1 = new Foto("foto1", "tamanio1", "jpg", "1x1");
var foto2 = new Foto("foto2", "tamanio2", "jpg", "2x2");
var video1 = new Video("video1", "tamanio3", "mp4", "5mins");
carpeta1.agregaralista(foto1);
carpeta1.agregaralista(foto2);
carpeta1.agregaralista(video1);
var x = carpeta1.mostrarlista();
console.log(x);
