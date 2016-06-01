---
---

## Autor

Jairo Suárez


## Arquitectura

La aplicación está subdivida en varios submodulos:

* Un módulo de streaming de audio
* Un módulo de websockets para actualización de la pista actual
* Un módulo de contenido web
* Un módulo de playlist

### Streaming de audio

Para este módulo se usó:
[StreamMachine](https://github.com/StreamMachine/StreamMachine)
el cual es un servidor de nueva generación orientado a reemplazar
Icecast y Shoutcast, alguna de las ventajas sobre estas plataformas son:

* Estadisticas
* Rewind (no implementado aún en Buho Radio)
* Esquema Maestro - Esclavo para implementar más de un servidor

el esquema de funcionamiento de este sistema se puede ver en la
siguiente gráfica:
![streaming](https://camo.githubusercontent.com/309521775ff18ce0b472d20590a05518283a7634/68747470733a2f2f7261772e6769746875622e636f6d2f77696b692f53747265616d4d616368696e652f53747265616d4d616368696e652f696d616765732f617564696f5f666c6f772e706e67
        "Streaming")

### WebSockets

Http no es un protocolo diseñado para trabajar en tiempo real,
generalmente para refrescar algo que se cambió en el servidor se
necesita preguntarle constantemente al servidor, lo cual genera un
impacto negativo en el mismo. HTML 5 define un nuevo protocolo de
conexión en el cual los WebSockets pueden mantener una conexión activa
con el servidor, esperando pasivamente que el servidor envie
actualizaciones. Esto se implementó para actualizar la canción que esta
sonando en el momento.

### Contenido Web

Se usó el servidor Nginx para gestionar el acceso desde web, este
servidor se encarga de gestionar el acceso a las diferentes aplicaciones
como son Audio y WebSockets, así como de presentar los archivos
necesarios para que se muestre la página.

### Módulo de Playlist

Para el módulo de PlayList se usó [LiquidSoap](http://liquidsoap.fm/) el
cual permite:

* Manejo de listas estáticas y dinámicas
* Inserción de Propagandas
* Intervención en vivo de DJs
* Interacción de usuarios (requests)
* Crossfading y otras transiciones

