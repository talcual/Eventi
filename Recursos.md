

Consumo de apis.

axios : Libreria para consumir apis 
fetch : Api nativa de Javascript muy novedosa usa promesas y es facil de usar.

Paso a seguir 

  - Crear un archivo para manejar las peticiones a la api ( src/api )
  - Crear funciones para cada peticion ( GET, POST, PUT, DELETE )
  - Importar las funciones en los componentes donde se necesiten y usarlas.


Ejemplo de uso de fetch para obtener datos de una api

```javascript
// src/api/eventos.ts
export const fetchEventos = async () => {
    const response = await fetch('https://api.example.com/eventos');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};
```     