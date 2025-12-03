# Escenarios de Prueba (BDD)

A continuación se describen los criterios de aceptación en formato Gherkin para guiar el desarrollo y las pruebas.

## Feature: Feed Principal

### Scenario: Carga exitosa de posts
- **GIVEN** el usuario ingresa a la página principal
- **WHEN** la API responde correctamente con la lista de posts
- **THEN** se debe renderizar una grilla de tarjetas
- **AND** cada tarjeta debe mostrar el título (truncado si es largo) y un extracto del cuerpo
- **AND** cada tarjeta debe tener un botón o enlace "Leer más".

### Scenario: Estado de carga (Loading)
- **GIVEN** el usuario ingresa a la aplicación
- **WHEN** la petición al servidor está en curso
- **THEN** se debe mostrar un indicador de carga visual (Skeleton) en lugar del contenido vacío.

## Feature: Vista de Detalle

### Scenario: Navegación al detalle
- **GIVEN** el usuario se encuentra en el Feed Principal
- **WHEN** hace clic en una publicación
- **THEN** debe ser redirigido a la ruta `/post/:id`
- **AND** debe ver el título completo, el cuerpo del post y la sección de comentarios.

## Feature: Gestión de Comentarios

### Scenario: Validación de formulario
- **GIVEN** el usuario está en el detalle de un post
- **WHEN** intenta enviar un comentario con campos vacíos
- **THEN** el sistema debe impedir el envío
- **AND** mostrar mensajes de error indicando los campos requeridos.

### Scenario: Envío exitoso (Simulación)
- **GIVEN** el usuario completó el formulario correctamente
- **WHEN** hace clic en "Enviar Comentario"
- **THEN** el botón debe mostrar un estado de carga
- **AND** al recibir éxito (201 Created), el formulario debe limpiarse
- **AND** se debe mostrar una notificación de éxito al usuario.