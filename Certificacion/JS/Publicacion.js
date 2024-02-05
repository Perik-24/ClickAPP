
public class Publicacion {
    private String contenido;

    public Publicacion(String contenido) {
        this.contenido = contenido;
    }

    public String getContenido() {
        return contenido;
    }

    
    class Publicacion {
        constructor(contenido, autor) {
            this.contenido = contenido;
            this.autor = autor;
            this.likes = 0;
        }
    
 
        getContenido() {
            return this.contenido;
        }
    

        setContenido(nuevoContenido) {
            this.contenido = nuevoContenido;
        }
 
        getAutor() {
            return this.autor;
        }
     
        setAutor(nuevoAutor) {
            this.autor = nuevoAutor;
        }
     
        getLikes() {
            return this.likes;
        }
     
        darLike() {
            this.likes++;
        }
    
         
        imprimirInformacion() {
            console.log(`Autor: ${this.autor}`);
            console.log(`Contenido: ${this.contenido}`);
            console.log(`Likes: ${this.likes}`);
        }
    
      
    }
    
     
    const miPublicacion = new Publicacion("Contenido de mi publicación", "Usuario123");
    miPublicacion.darLike();
    miPublicacion.imprimirInformacion();
    
}
