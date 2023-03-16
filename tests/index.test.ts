import { Carpeta, Foto, Video } from '../src/index';

describe('testing index file', () => {
  test('Agregar archivos a la carpeta', () => {
    var carpeta1 = new Carpeta("carpeta1");

    var foto1 = new Foto("foto1", "jpg", "1x1");
    var foto2 = new Foto("foto2", "jpg", "2x2");
    var video1 = new Video("video1", "mp4", "5mins");

    carpeta1.agregaralista(foto1);
    carpeta1.agregaralista(foto2);
    carpeta1.agregaralista(video1);

    expect(carpeta1.mostrarlista()).toEqual([ 'foto1', 'foto2', 'video1' ]);
  });
});

describe('testing index file', () => {
  test('Mostrar carpeta vacia', () => {
    var carpeta1 = new Carpeta("carpeta1");
    
    expect(carpeta1.mostrarlista()).toEqual([ ]);
  });
});

describe('testing index file', () => {
  test('carpeta dentro de carpeta', () => {
    var carpeta1 = new Carpeta("carpeta1");
    var carpeta2 = new Carpeta("carpeta2");

    carpeta1.agregaralista(carpeta2);
    
    expect(carpeta1.mostrarlista()).toEqual([ "carpeta2" ]);
  });
});

describe('testing index file', () => {
  test('tamanio de carpeta', () => {
    var carpeta1 = new Carpeta("carpeta1");

    var foto1 = new Foto("foto1", "jpg", "1x1");
    var foto2 = new Foto("foto2", "jpg", "2x2");
    var video1 = new Video("video1", "mp4", "5mins");

    carpeta1.agregaralista(foto1);
    carpeta1.agregaralista(foto2);
    carpeta1.agregaralista(video1);
    
    expect(carpeta1.mostrartamanio()).toEqual( 24 );
  });
});

describe('testing index file', () => {
  test('tamanio de carpeta con carpetas dentro', () => {
    var carpeta1 = new Carpeta("carpeta1");
    var carpeta2 = new Carpeta("carpeta2");
    var carpeta3 = new Carpeta("carpeta2");

    var foto1 = new Foto("foto1", "jpg", "1x1");
    var foto2 = new Foto("foto2", "jpg", "2x2");
    var foto3 = new Foto("foto3", "jpg", "3x3");
    var foto4 = new Foto("foto4", "jpg", "4x4");
    var video1 = new Video("video1", "mp4", "5mins");
    var video2 = new Video("video2", "mp4", "5mins");
    var video3 = new Video("video3", "mp4", "5mins");

    carpeta1.agregaralista(foto1);
    carpeta1.agregaralista(foto2);
    carpeta1.agregaralista(video1);
    carpeta1.agregaralista(foto3);
    carpeta2.agregaralista(video2);
    carpeta2.agregaralista(video3);
    carpeta1.agregaralista(carpeta2);
    carpeta2.agregaralista(carpeta3);
    carpeta3.agregaralista(foto4);

    expect(carpeta1.mostrartamanio()).toEqual( 57 );
  });
});
