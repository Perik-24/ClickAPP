/*/
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class PublicacionController {

    @GetMapping("/publicaciones")
    public String obtenerPublicaciones(Model model) {
        List<Publicacion> publicaciones = obtenerPublicacionesDesdeLaBaseDeDatos(); // Implementa según tu almacenamiento
        model.addAttribute("publicaciones", publicaciones);
        return "publicaciones";
    }

    private List<Publicacion> obtenerPublicacionesDesdeLaBaseDeDatos() {
        // Implementa la lógica para obtener las publicaciones desde tu almacenamiento
        // Puedes utilizar una base de datos, un servicio externo, etc.
        List<Publicacion> publicaciones = new ArrayList<>();
        // Llena la lista con datos de prueba
        publicaciones.add(new Publicacion("Publicación 1"));
        publicaciones.add(new Publicacion("Publicación 2"));
        publicaciones.add(new Publicacion("Publicación 3"));
        return publicaciones;
    }
}
