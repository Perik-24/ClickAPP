actor BlogFotos() {

  type Autor = {
    nombre: Texto;
    username: Texto;
  };

  type PublicacionFoto = {
    id: Nat;
    autor: Autor;
    titulo: Texto;
    descripcion: Texto;
  };

  public var fotos: [PublicacionFoto] = [];
  public var contadorFotos: Nat = 0;

  public query func obtenerFotos() : [PublicacionFoto] {
    return fotos;
  };

  public func agregarFoto(autor: Autor, titulo: Texto, descripcion: Texto) : async {
    let nuevaFoto = { id = contadorFotos; autor = autor; titulo = titulo; descripcion = descripcion };
    Array.append(fotos, nuevaFoto);
    contadorFotos += 1;
  };
};

// Instanciar el actor BlogFotos
let blogFotos = BlogFotos();

// Agregar algunas fotos
await blogFotos.agregarFoto({ nombre = "Autor1"; username = "usuario1" }, "Foto de Naturaleza", "Increíble paisaje.");

// Obtener y mostrar la lista de fotos
let listaDeFotos = await blogFotos.obtenerFotos();
Debug.print("Lista de Fotos:", listaDeFotos);
