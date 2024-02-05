actor PuntoDeEntrada() {

  public query func iniciar() : async {
    // Lógica de inicio aquí
    let publicacionesActor = await Publicaciones();
    let listaDePublicaciones = await publicacionesActor.obtenerPublicaciones();
    // Realizar más operaciones según sea necesario
    Debug.print("Publicaciones iniciales:", listaDePublicaciones);
  };
};

actor Publicaciones() {

  public var publicaciones : [Texto] = [];

  public query func obtenerPublicaciones() : [Texto] {
    return publicaciones;
  };

  public func agregarPublicacion(publicacion : Texto) : async {
    Array.append(publicaciones, publicacion);
  };
};

 
PuntoDeEntrada().iniciar();
