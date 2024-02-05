import { actor, PuntoDeEntrada } from 'ic:your-canister-id';

const puntoDeEntrada = actor(PuntoDeEntrada);

async function mostrarPublicaciones() {
    const contenido = document.getElementById('contenido');
    contenido.innerHTML = '<h2>Publicaciones</h2>';

    const publicaciones = await puntoDeEntrada.obtenerPublicaciones();
    publicaciones.forEach(publicacion => {
        const parrafo = document.createElement('p');
        parrafo.textContent = publicacion;
        contenido.appendChild(parrafo);
    });
}

 
function mostrarSubMenu(opcion) {
     
    console.log('Mostrar menú para:', opcion);
}

public class Publicacion {
    private String contenido;

    public Publicacion(String contenido) {
        this.contenido = contenido;
    }

   
    public class Publicacion {
        private String contenido;
    
   
        public Publicacion(String contenido) {
            this.contenido = contenido;
        }
    
      
        public String getContenido() {
            return contenido;
        }
    
       
        public void setContenido(String nuevoContenido) {
            this.contenido = nuevoContenido;
        }
     
        public void imprimirInformacion() {
            System.out.println("Contenido de la publicación: " + contenido);
        }
     
    }
    
}
