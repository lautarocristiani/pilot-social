# Escenarios de Prueba (BDD)

Criterios de aceptación en formato Gherkin.

## Feature: Feed Principal

### Scenario: Carga y Visualización
- **GIVEN** el usuario ingresa a la aplicación
- **WHEN** la API responde con la lista de posts
- **THEN** se debe renderizar una grilla de tarjetas con título y extracto
- **AND** se debe mostrar un indicador de carga (Skeleton) mientras la petición está en curso.

### Scenario: Filtrado Combinado
- **GIVEN** existen posts del "Usuario 1" sobre "Tecnología"
- **WHEN** el usuario selecciona "Usuario 1" en el filtro de autor
- **AND** escribe "Tecnología" en el buscador
- **THEN** la lista debe mostrar únicamente los posts que cumplan ambas condiciones.

## Feature: Detalle y Comentarios

### Scenario: Persistencia Híbrida de Comentarios
- **GIVEN** el usuario se encuentra en el detalle de un post
- **WHEN** completa el formulario y envía un comentario nuevo
- **THEN** el comentario debe agregarse visualmente a la lista existente (traída de la API)
- **AND** si el usuario recarga la página (F5), su comentario nuevo debe seguir apareciendo (recuperado de almacenamiento local).

### Scenario: Validación de Formulario
- **GIVEN** el formulario de comentarios
- **WHEN** el usuario intenta enviar datos vacíos o inválidos (ej: email sin formato)
- **THEN** el botón de envío debe estar deshabilitado o mostrar un error visual.