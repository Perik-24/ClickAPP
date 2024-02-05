actor BlogVideos() {

  type Autor = {
    nombre: Texto;
    username: Texto;
  };

  type PublicacionVideo = {
    id: Nat;
    autor: Autor;
    titulo: Texto;
    url: Texto;
  };

  public var videos: [PublicacionVideo] = [];
  public var contadorVideos: Nat = 0;

  public query func obtenerVideos() : [PublicacionVideo] {
    return videos;
  };

  public func agregarVideo(autor: Autor, titulo: Texto, url: Texto) : async {
    let nuevoVideo = { id = contadorVideos; autor = autor; titulo = titulo; url = url };
    Array.append(videos, nuevoVideo);
    contadorVideos += 1;
  };
};

// Instanciar el actor BlogVideos
let blogVideos = BlogVideos();

// Agregar algunos videos
await blogVideos.agregarVideo({ nombre = "Autor2"; username = "usuario2" }, "Video Tutorial", "https://www.ejemplo.com/tutorial");

// Obtener y mostrar la lista de videos
let listaDeVideos = await blogVideos.obtenerVideos();
Debug.print("Lista de Videos:", listaDeVideos);
