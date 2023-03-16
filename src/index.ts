class Elemento {
    nombre: string;
    tamanio: number;
  }

export class Carpeta extends Elemento{
    elementos: Array<Elemento>;
    agregaralista(x:Elemento) {
        this.elementos.push(x);
        this.modificartamanio();
    }
    mostrarlista(){
        var list: Array<string>;
        list = []
        var i: number;
        i = 0;
        while (i != this.elementos.length){
            list.push(this.elementos[i].nombre);
            i = i+1;
        }
        return list
    }
    modificartamanio(){
        var i: number = 0;
        var resul: number = this.nombre.length;
        while (i <= this.elementos.length-1){
            resul = resul+this.elementos[i].tamanio;
            i = i+1;
        }
        this.tamanio = resul;
    }
    mostrartamanio(){
        this.modificartamanio();
        return this.tamanio;
    }
    constructor(nom:string){
        super();
        this.nombre = nom;
        this.tamanio = this.nombre.length;
        this.elementos = [];
    }
}

class Archivo extends Elemento{
    tipo: string;
    constructor(){
        super()
    }
}

export class Foto extends Archivo{
    dimensiones: string;
    constructor(nom:string, tip:string, dim:string){
        super()
        this.nombre=nom;
        this.tamanio=this.nombre.length;
        this.tipo=tip;
        this.dimensiones=dim;
    }
}

export class Video extends Archivo{
    duracion: string;
    constructor(nom:string, tip:string, dur:string){
        super()
        this.nombre=nom;
        this.tamanio=this.nombre.length;
        this.tipo=tip;
        this.duracion=dur;
    }
}
